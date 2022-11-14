import React from 'react'
import { Input, InputGroup, InputLeftAddon, Stack, Image, Box, Flex, Button } from '@chakra-ui/react'
import { Link as RLink } from "react-router-dom"
import { FaRegUser } from "react-icons/fa";


const Payments = () => {
    return (

        <>
        <Box ml={"500"} border="1px solid pink">
        <div className='a1'>
        <div className='img1'>
            <img className='img2' src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png" alt="" />
        </div>
        <div className='logo'>
            <FaRegUser id="fa" />
            

        </div>

    </div>

    <div className='bag'>
        <h2 className='bag1'>PAYMENT</h2>
    </div>
            <Stack spacing={4} width={["300px", "400px", "500px"]} h="fit-content" m={["auto", "auto", "50px auto"]}>
                <Image src="https://i.ibb.co/8mXRdkR/image-5-2.png"></Image>
                <InputGroup>
                    <InputLeftAddon children='+₹' />
                    <Input type='tel' placeholder='Enter Amount' />
                </InputGroup>
                <Input w="100%" m="auto" placeholder='Enter Card Number' mb="10px" ></Input>
                <Flex w="100%" justifyContent={"space-between"}>
                    <Input w="33%" m="auto" placeholder='Expiretion Date' mb="10px" ></Input>
                    <InputGroup w="40%" m="0px 10px">
                        <InputLeftAddon children='CVV' />
                        <Input type='text' />
                    </InputGroup>
                    <Input w="33%" m="auto" placeholder='Zipcode' mb="10px" ></Input>
                </Flex>
                <RLink to="/">
                    <Button onClick={() => alert("Payment Successful")} bg="rgb(18,40,76)" color={"white"} letterSpacing="0.5px" m="auto" w="fit-content" borderRadius="0" p="10px 30px" >MAKE PAYMENT</Button></RLink>
                <Image src="https://i.ibb.co/KKDvTqX/image-1-10.png"></Image>
            </Stack>
        </Box>
        </>
    )
}

export default Payments