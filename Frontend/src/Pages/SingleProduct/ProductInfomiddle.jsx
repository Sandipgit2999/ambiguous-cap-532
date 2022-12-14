
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RiHeartAddLine } from "react-icons/ri";
import axios from "axios";
import {
    Box,
    Text,
    Image,
    Button,
    Grid,
    GridItem,
    Input,

} from "@chakra-ui/react";

import API from "../../Components/Url";




const ProductInfomiddle = () => {
    const [prod, setProd] = useState();
    const { id } = useParams();

    console.log(".....productmiddel", id)
    const add = (_id) => {
        axios.get(`${API}/makeup/${_id}`)
            .then((res) => {
                console.log(res.data);
                setProd(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        add(id)
    }, [id])

    const Addtocart = (id) => {
        axios.post(`${API}/cart/create/${id}`)
            .then((res) => {
                console.log(res);
                alert(res.data.msg)
            })
            .catch((err) => {
                console.log(err)
            })

        console.log("Hii")
    }


    const Addfavourite = (id) => {
        axios.post(`${API}/favourite/create/${id}`)
            .then((res) => {
                console.log(res);
                alert(res.data.msg)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            {
                prod && <Grid
                    w="90%"
                    h={{ base: "200px", md: "400px", lg: "500px" }}
                    m="auto"
                    mt="8"
                    gap="8"
                    templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
                >
                    <GridItem
                        w={{ base: "50%", md: "60%", lg: "100%" }}
                        m={{ base: "auto", lg: "0" }}
                        h={{ base: "200px", md: "400px", lg: "500px" }}
                    >
                        <Image w="100%" h="100%" src={prod.image_link} />
                    </GridItem>

                    <GridItem w="100%" h="70vh" justifyItems="flex-start" flexDirection="column">

                        <Box display="flex" flexDirection="column" mr="15%" >

                            <Text fontSize="10px" fontWeight="semibold" color="gray.600">
                                FLAT {prod.price * 1.5}% OFF
                            </Text>

                            <Text
                                fontSize={{ base: "md", lg: "xl" }}
                                mt="4"
                                fontWeight="semibold"
                                color="gray.600"
                            >
                                SEPHORA COLLECTION
                            </Text>
                            <Text fontSize="xsm" mt="4" ml="4" color="gray.600">

                                {prod.name}
                            </Text>
                            <Text mt="4%">Rs. {prod.price * 200}</Text>
                        </Box>

                        <Box display="flex" mt="4%" ml="20%" justifyContent="flex-start">

                            <Text>OFFER:</Text> <Box>
                                <Text width="80%" marginBottom="3%">BUY WORTH 3000 FROM SEPHORA & EXCLUSIVES AND GET A MASSAGE BALL AND GLOVES FREESEP3000
                                    <Text color="
                             #ff3399">OTHER ELIGIBLE PRODUCTS</Text></Text>

                            </Box>
                        </Box>

                        <Box border="2px solid orange" mt="5%" padding="2%" ml="20%" w="80%">
                            <Text display="flex" justifyContent="flex-start">IMPORTANT :</Text>
                            <Text width="60%">All products that will be shipped will have a shelf-life more than 8 months to 3 years.</Text>
                        </Box>
                        <Box
                            display="flex"
                            w="100%"
                            h="10%"
                            ml="20%"
                            pl="4"
                            mt="6 "
                            mb="6"
                            alignItems="center"

                        >
                            <Box
                                bg="#ff3399"
                                h="100%"
                                w="70%"
                                display="flex"
                                justifyItems="center"
                                alignItems="center"
                                justifyContent="space-between"
                                pl="4"
                                pr="4"
                                cursor="pointer"
                                onClick={() => Addtocart(id)}

                            > <Text color="white" ml="15" fontWeight="bold">
                                    ADD TO BAG
                                </Text>
                            </Box>

                        </Box>

                        <Box mb="5%">
                            <Box border="2px solid pink" onClick={() => { Addfavourite(id) }} borderRadius="50%" cursor="pointer" width="50px" height="50px"
                                bg=" white"
                                display="inline-block" > <RiHeartAddLine style={{ width: "95%", color: "pink", height: "95%" }} /></Box>
                            <Text>Favourites</Text>
                        </Box>

                        <Box ml="20%" padding="3%" border="2px solid orange">
                            <Text display="flex" justifyContent="flex-start">RETURN POLICY ON THIS ITEM</Text>
                            <Text width="80%">This item is non-returnable.</Text>
                        </Box>
                        <Box ml="20%" mt="8%">
                            <Image src="https://static.nnnow.com/client/assets/images/pdp/pdp_desktop_1.jpg" />
                        </Box>
                        <Box w="60%" ml="20%" mt="8%">
                            <Text>DELIVERY/STORE OPTIONS :</Text>
                            <Text>Enter your pincode to view delivery & store options</Text>
                            <Input htmlSize={6} size='sm' width='auto' placeholder='PinCode' />
                            <Button size='sm'>CHECK</Button>
                        </Box>
                    </GridItem>
                </Grid>
            }
        </>
    )
}

export default ProductInfomiddle