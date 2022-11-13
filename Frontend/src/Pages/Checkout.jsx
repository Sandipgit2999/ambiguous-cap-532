import { Flex, Box, Image, Text, Input } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link as RLink } from "react-router-dom";

const Checkout = () => {
    const [code, setCode] = useState("")
    const [cartItem, setCartItem] = useState([])

    const getdata = () => {
        axios.get("https://stark-lake-19402.herokuapp.com/cart")

            .then((res) => {
                console.log(res)
            })
    }
    // const cartItem = useFetch("https://stark-lake-19402.herokuapp.com/cart")
    // const productdata = cartItem.data
    // console.log(cartItem.data)
    let total = 1200

    // var total = productdata.reduce(function (sum, el) {
    //     if (code == "MASAI") {
    //         return (sum + (Number(el.Price) * Number(el.Quantity)) * 0.7)
    //     }
    //     return sum + (Number(el.Price) * Number(el.Quantity))
    // }, 0)

    //  const [subTotal , setSubTotal] = useState(total)
    //  console.log(subTotal)

    const handleDiscount = () => {
        if (code == "MASAI") {
            total = total * 0.7
            console.log(total)
        }
        else {
            alert("Wrong Coupon Code")
        }
    }
    return (
        <Box width={"9xl"} color={"rgb(98,98,98)"}>
            <Flex flexDirection={["column", "column", "row"]}>
                <Flex
                    width={["100%", "100%", "70%"]}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-end"}
                    mr={["0px", "0px", "50px"]}
                >
                    <Box
                        w={["98%", "100%", "65%"]}
                        display={"flex"}
                        flexDirection="column"
                        justifyContent={"flex-start"}
                        textAlign={"left"}
                        pt="30px"
                    >

                        <Text fontSize="xl">Contact information</Text>

                        <Box
                            border={"2px solid rgb(98,98,98)"}
                            w="60%"
                            p="0px 8px"
                            borderRadius={"5px"}
                            m="15px 0px"
                        >
                            <Text fontSize={"13px"}>EMAIL</Text>
                            <input type="text" style={{ width: "102%", border: "none" }} />
                        </Box>

                        <Checkbox colorScheme="green" fontSize={"10px"} mb="25px">
                            Email me with news and offers
                        </Checkbox>

                        <Text fontSize="lg">Shipping address</Text>
                        <Flex w="100%" justifyContent={"space-between"} m="10px 0px">
                            <Input w="47%" placeholder="First Name"></Input>
                            <Input w="49%" placeholder="Last Name"></Input>
                        </Flex>
                        <Input w="100%" placeholder="Address" mb="10px"></Input>
                        <Input
                            w="100%"
                            placeholder="Apartment, suite, etc. (Optional)"
                            mb="10px"
                        ></Input>
                        <Flex w="100%" justifyContent={"space-between"}>
                            <Input w="33%" m="auto" placeholder="City" mb="10px"></Input>
                            <Input w="33%" m="auto" placeholder="State" mb="10px"></Input>
                            <Input w="33%" m="auto" placeholder="Zipcode" mb="10px"></Input>
                        </Flex>
                        <Checkbox
                            colorScheme="green"
                            fontSize={"10px"}
                            defaultChecked
                            mb="25px"
                        >
                            Save this information for next time{" "}
                        </Checkbox>
                        <Text>
                            By continuing, you agree to Sephora's{" "}
                            <b> Privacy Practices.</b>
                        </Text>
                        <Flex w="100%" justifyContent={"flex-end"} m="20px 0px">
                            <Button
                                bg="rgb(18,40,76)"
                                color={"white"}
                                letterSpacing="0.5px"
                                borderRadius="0"
                                p="10px 30px"
                            >
                                CONTINUE TO SHIPPING METHOD
                            </Button>
                        </Flex>

                        <hr />
                        <Text m="10px 0px" fontSize={"14px"} letterSpacing="0.9px">
                            All rights reserved Sephora{" "}
                        </Text>
                    </Box>
                </Flex>

                <Box
                    width={["100%", "100%", "50%"]}
                    bg={"rgb(248,248,248)"}
                    pt="50px"
                    mb={["100px", "0px", "0px"]}
                >
                    <Flex
                        width={["80%", "100%", "70%"]}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        ml="50px"
                    >
                        <Box w="80%" m="auto">
                            {" "}
                            Items
                        </Box>
                        <Flex alignItems={"center"} w="100%">
                            <Box
                                w="80%"

                                p="0px 8px"
                                borderRadius={"5px"}
                                m="15px 0px"
                            >

                                <Input w="100%" border="3px solid gray" placeholder="Apply Coupon Code" onChange={(e) => setCode(e.target.value)} />
                            </Box>
                            <Button
                                w="40%"
                                bg="rgb(18,40,76)"
                                color={"white"}
                                letterSpacing="0.5px"
                                borderRadius="0"
                                p="10px 30px"
                                onClick={handleDiscount}
                            >
                                APPLY
                            </Button>
                        </Flex>
                        <Box border={"1px solid rgb(222,222,222)"} w="100%" />
                        <Flex
                            w="100%"
                            justifyContent={"space-between"}
                            m="20px auto 10px auto"
                        >
                            <Text fontSize={"15px"}>Subtotal</Text>
                            <Text>$ {total}</Text>
                        </Flex>
                        <Flex w="100%" justifyContent={"space-between"} mb="20px">
                            <Text fontSize={"15px"}>Shipping </Text>
                            <Text fontSize={"15px"}>$ 0</Text>
                        </Flex>

                        <Box border={"1px solid rgb(222,222,222)"} w="100%" />

                        <Flex
                            w="100%"
                            justifyContent={"space-between"}
                            m="20px auto 10px auto"
                        >
                            <Text fontSize={"16px"}>
                                {" "}
                                <b> Total </b>
                            </Text>
                            <Text fontSize={"16px"}>
                                USD <b> $ {total}</b>
                            </Text>
                        </Flex>

                    </Flex>



                    <RLink to="/payments">
                        <Button bg="rgb(18,40,76)" color={"white"} letterSpacing="0.5px" m="20px auto" borderRadius="0" p="10px 30px" >CONTINUE PAYMENT</Button></RLink>


                    <RLink to="/payments">

                    </RLink>

                </Box>

            </Flex>
        </Box>

    );
};

export default Checkout;
