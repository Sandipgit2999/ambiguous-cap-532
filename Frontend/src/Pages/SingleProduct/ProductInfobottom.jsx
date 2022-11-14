import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
    Box,
    Text,
    Grid,
    GridItem,

} from "@chakra-ui/react";
import API from "../../Components/Url";


const ProductInfobottom = () => {

    const [prod, setProd] = useState();
    const [finerdetails, setFinerdetails] = useState(true);
    const [aboutsephora, setAboutsephora] = useState(false)
    const [returnexchange, setReturnexchange] = useState(false)
    const { id } = useParams();

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

    return (
        <>{
            prod && <Grid bg="red" backgroundImage={prod.image_link} w="95%"
                h={{ base: "200px", md: "400px", lg: "500px" }}
                m="auto"
                mt="8"
                gap="8"
                mb="8"
            >

                <GridItem justifyContent="center" alignItems="center" width="80%">
                    <Box display="flex" ml="8%" width="70%" justifyContent="space-between">
                        <Box cursor="pointer" padding="8px" bg={finerdetails ? "white" : "black"} color={finerdetails ? "black" : "white"} onClick={() => {
                            setFinerdetails(true);
                            setAboutsephora(false);
                            setReturnexchange(false)
                        }}>
                            <Text>THE FINER DETAILS</Text>

                        </Box>
                        <Box cursor="pointer" padding="8px" bg={aboutsephora ? "white" : "black"} color={aboutsephora ? "black" : "white"} onClick={() => {
                            setFinerdetails(false);
                            setAboutsephora(true);
                            setReturnexchange(false)
                        }}>
                            <Text>ABOUT SEPHORA COLLECTION</Text>
                        </Box>
                        <Box cursor="pointer" padding="8px" bg={returnexchange ? "white" : "black"} color={returnexchange ? "black" : "white"} onClick={() => {
                            setFinerdetails(false);
                            setAboutsephora(false);
                            setReturnexchange(true)
                        }}>
                            <Text>RETURN & EXCHANGES</Text>
                        </Box>
                    </Box>

                    <Box ml="8%" >

                        {
                            finerdetails && <Box overflow="auto" w="100%" h="200px" bg="white">
                                {prod.description}
                            </Box>
                        }
                        {
                            aboutsephora && <Box w="100%" h="200px" bg="white">
                                Sephora has earned its reputation as a beauty trailblazer with its expertise, innovation, and entrepreneurial spirit. Owned by LVMH Moët Hennessy Louis Vuitton, the world's leading luxury goods group, Sephora’s revolutionary beauty-retail concept features an ever-increasing assortment of products from carefully curated brands, indie darlings, trusted classics, and Sephora’s own, SEPHORA COLLECTION.
                            </Box>
                        }

                        {
                            returnexchange && <Box w="100%" h="200px" bg="white">
                                This item can’t be returned — our Returns Policy doesn’t cover innerwear, lingerie, fragrances and beauty products.
                            </Box>
                        }
                    </Box>
                </GridItem>
            </Grid>
        }
        </>
    )
}

export default ProductInfobottom