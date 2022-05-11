import React from 'react';
import { Box, Flex, Image, FormControl, FormLabel, Input, Button, Heading, Circle, Center, Text, Stack } from '@chakra-ui/react';
import login from '../images/login_img.png'
import car from '../images/car.png'
import { Link } from "react-router-dom"
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

const LoginComponent = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };



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
            <Heading as='h6' size='md' my='3' isTruncated>Welcome to Binar</Heading>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input id='email' type='email' mb='3' />
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input id='password' type='password' mb='5' />
            <Link to='/'>
              <Button w='100%' colorScheme='blue'>Login</Button>
            </Link>
          </FormControl>
          <Center mt='2'>
            <Stack>
              <Link to='/register'>Don't have an account? Sign up!</Link>
              <Text align='center'>or</Text>
            </Stack>
          </Center>
          <Flex justify='center' gap='3' mt='3'>
            <Circle bg='tomato' color='white' p='2' onClick={google} cursor='pointer'><FaGoogle size='18px' /></Circle>
            <Circle bg='#3182CE' color='white' p='2' onClick={facebook} cursor='pointer'><FaFacebook size='18px' /></Circle>
            <Circle bg='black' color='white' p='2' onClick={github} cursor='pointer'><FaGithub size='18px' /></Circle>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}

export default LoginComponent