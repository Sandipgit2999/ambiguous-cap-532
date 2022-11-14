import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import API from '../../Components/Url';
import { useNavigate } from "react-router-dom"

function Signup() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("")
  const navigate = useNavigate();

  const handleSignup = () => {
    axios.post(`${API}/user/Signup`, { email, password, name, phone })
      .then((res) => {
        console.log(res);
        setEmail("");
        setPassword("")
        setName("");
        setPhone("")
        navigate("/login")
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
          <Heading fontSize={'4xl'}>Signup to your account</Heading>
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

              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" value={name} placeholder='enter name' onChange={(e) => { setName(e.target.value) }} />
              </FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} placeholder='enter email' onChange={(e) => { setEmail(e.target.value) }} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} placeholder='enter password' onChange={(e) => { setPassword(e.target.value) }} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Phone</FormLabel>
              <Input type="text" value={phone} placeholder='enter phone' onChange={(e) => { setPhone(e.target.value) }} />
            </FormControl>
            <Stack spacing={10}>

              <Button
                onClick={handleSignup}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}


export default Signup