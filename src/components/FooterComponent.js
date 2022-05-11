import React from 'react'
import { Box, Container, Flex, Spacer, Text, Circle, Image } from '@chakra-ui/react'
import { FaFacebookF, FaInstagram, FaTwitter, FaTwitch, FaEnvelope } from "react-icons/fa";
import car from '../images/car.png'
const FooterComponent = () => {
  return (
    <Box maxW='100%' px='3' mt={{
      base: '100px',
      md: '100px'
    }} pb='6'>
      <Container maxW='1440px' margin='auto'>
        <Flex wrap='wrap' justify='center' gap={{
          base: '1',
          md: '0'
        }}>
          <Box w={{
            base: '100%',
            md: '25%'
          }}>
            <Text>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</Text>
            <Text>binarcarrental@gmail.com</Text>
            <Text>081-233-334-808</Text>
          </Box>
          <Spacer />
          <Box w={{
            base: '100%',
            md: '25%'
          }}>
            <Text>Our Services</Text>
            <Text>Why Us</Text>
            <Text>Testimonial</Text>
            <Text>FAQ</Text>
          </Box>
          <Spacer />
          <Box w={{
            base: '100%',
            md: '25%'
          }}>
            <Text>Connect With Us</Text>
            <Flex gap='2' mt='1'>
              <Circle size='32px' color='white' bg='#0D28A6'>
                <FaFacebookF />
              </Circle>
              <Circle size='32px' color='white' bg='#0D28A6'>
                <FaInstagram />
              </Circle>
              <Circle size='32px' color='white' bg='#0D28A6'>
                <FaTwitter />
              </Circle>
              <Circle size='32px' color='white' bg='#0D28A6'>
                <FaEnvelope />
              </Circle>
              <Circle size='32px' color='white' bg='#0D28A6'>
                <FaTwitch />
              </Circle>
            </Flex>
          </Box>
          <Spacer />
          <Box w={{
            base: '100%',
            md: '25%'
          }}>
            <Text>Copyright Binar 2022</Text>
            <Box>
              <Image
                src={car}
                h='100px'
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default FooterComponent