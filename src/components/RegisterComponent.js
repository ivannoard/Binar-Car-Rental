import React, { useState, useEffect } from 'react';
import { Box, Flex, Image, FormControl, FormLabel, Input, Button, Heading, Text, Center } from '@chakra-ui/react';
import login from '../images/login_img.png'
import car from '../images/car.png'
import { Link, Navigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/actions/userAction'
const LoginComponent = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const register = () => {
    console.log(email, password);
    dispatch(addUser({ email, password }))
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    register()
  }, [])
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
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input id='email' type='email' mb='3' value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input id='password' type='password' mb='5' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button w='100%' colorScheme='blue' onClick={register}>Register</Button>
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