import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,

    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import API from '../../Components/Url';
import { Link, useNavigate } from "react-router-dom"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();
    const handlelogin = () => {
        axios.post(`${API}/user/login`, { email, password })
            .then((res) => {
                console.log(res);
                setEmail("");
                setPassword("")
                if(res.data.msg==="successfully login"){
                    localStorage.setItem("sephoratoken", JSON.stringify(res.data.token))
                    navigate("/")
                }
                
                alert(res.data.msg)


            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <Flex

            align={'center'}
            justify={'center'}
            ml="500"
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Log in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={6}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" value={email} placeholder='enter email' onChange={(e) => { setEmail(e.target.value) }} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" value={password} placeholder='enter password' onChange={(e) => { setPassword(e.target.value) }} />
                        </FormControl>
                        <Stack spacing={10}>

                            <Button
                                onClick={handlelogin}
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Log in
                            </Button>
                        </Stack>

                        <Text>Dont have a account?  <Link to="/signup">  Create one</Link></Text>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}


export default Login