import React, { useState } from 'react';
import { Box, Flex, Image, FormControl, FormLabel, Input, Button, Heading, Text, Center } from '@chakra-ui/react';
import login from '../images/login_img.png'
import car from '../images/car.png'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/actions/userAction'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const LoginComponent = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const [success, setSuccess] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch(loginUser(user))
        setSuccess(true)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Flex>
      <Box w={
        {
          base: '100%',
          md: '70%',
        }
      }>
        <Image
          src={login}
          h='100vh' w='100vw'
        />
      </Box>
      <Flex justifyContent='center' align='center'
        w={
          {
            base: '100%',
            md: '30%'
          }
        }
        pos={{
          base: 'absolute',
          md: 'static'
        }}
        top='0' bottom='0' left='0' right='0' margin='auto'>
        <Box borderWidth='1px' p='5' borderRadius='md' background='white'>
          <FormControl>
            <Image
              src={car}
              h='100px'
            />
            <Heading as='h6' size='md' my='3' isTruncated>Register Account</Heading>
            {success && <Text bg='green' color='white' p='2' mb='3'>Register success please login!</Text>}
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input id='email' type='email' mb='3' value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input id='password' type='password' mb='5' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button w='100%' colorScheme='blue' onClick={handleRegister}>Register</Button>
          </FormControl>
          <Center mt='2'>
            <Link to='/login'>Already have an account? Sign in!</Link>
          </Center>
        </Box>
      </Flex>
    </Flex>
  )
}

export default LoginComponent