import { Box, Circle, Container, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function PaymentStep({ second, third }) {
  return (
    <Flex justify='space-between' gap='2' align='center'>
      <Spacer />
      <Flex gap='2' align='center'>
        <Circle className='btn-navigate-active' w='15px' h='15px' p='2.5' fontSize='sm'>1</Circle>
        <Text>Pilih Metode</Text>
      </Flex>
      -
      <Flex gap='2' align='center'>
        <Circle className={second ? 'btn-navigate-active' : 'btn-navigate'} w='15px' h='15px' p='2.5' fontSize='sm'>2</Circle>
        <Text>Bayar</Text>
      </Flex>
      -
      <Flex gap='2' align='center'>
        <Circle className={third ? 'btn-navigate-active' : 'btn-navigate'} w='15px' h='15px' p='2.5' fontSize='sm'>3</Circle>
        <Text>Tiket</Text>
      </Flex>
    </Flex>
  )
}

const PaymentNavigation = ({ second, third }) => {
  const navigate = useNavigate()
  return (
    <Container maxW='1200px' margin='auto' pt='5'>
      <Flex align='center' wrap='wrap'>
        <Box w={{ base: '100%', md: '50%' }}>
          <Flex gap='2' cursor='pointer' onClick={() => navigate(-1)}>
            <FaArrowLeft />
            <Box>
              <Heading size='sm'>Pembayaran</Heading>
            </Box>
          </Flex>
        </Box>
        <Box w={{ base: '100%', md: '50%' }} mt={{ base: '30px', md: '0' }} display={{ base: 'flex', md: 'block' }} justify={{ base: 'center' }} align='center'>
          <PaymentStep second={second} third={third} />
        </Box>
      </Flex>
    </Container>
  )
}

export default PaymentNavigation