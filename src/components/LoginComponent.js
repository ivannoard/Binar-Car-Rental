import React, { useState, useEffect } from 'react';
import { Box, Flex, Image, FormControl, FormLabel, Input, Button, Heading, Circle, Center, Text, Stack } from '@chakra-ui/react';
import login from '../images/login_img.png'
import car from '../images/car.png'
import { Link, useNavigate } from "react-router-dom"
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/userAction'

const LoginComponent = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.users.users)
  const navigate = useNavigate()
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const handleLogin = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch(loginUser(user))
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const google = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch(loginUser(user))
        navigate('/')
      }).catch((error) => {
        console.log(error);
      });
  }

  const github = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        dispatch(loginUser(user))
        navigate('/')
      }).catch((error) => {
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
          <FormControl >
            <Image
              src={car}
              h='100px'
            />
            <Heading as='h6' size='md' my='3' isTruncated>Welcome to Binar</Heading>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input id='email' type='email' mb='3' value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input id='password' type='password' mb='5' onChange={(e) => setPassword(e.target.value)} />
            <Button w='100%' colorScheme='blue' onClick={handleLogin}>Login</Button>
          </FormControl>
          <Center mt='2'>
            <Stack>
              <Link to='/register'>Don't have an account? Sign up!</Link>
              <Text align='center'>or</Text>
            </Stack>
          </Center>
          <Flex justify='center' gap='3' mt='3'>
            <Circle bg='tomato' color='white' p='2' onClick={google} cursor='pointer'><FaGoogle size='18px' /></Circle>
            <Circle bg='#3182CE' color='white' p='2' cursor='pointer'><FaFacebook size='18px' /></Circle>
            <Circle bg='black' color='white' p='2' onClick={github} cursor='pointer'><FaGithub size='18px' /></Circle>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}

export default LoginComponent