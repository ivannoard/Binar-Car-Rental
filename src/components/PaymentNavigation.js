import { Box, Circle, Container, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

function PaymentStep({ second, third }) {
  return (
    <Flex justify='space-between' gap='2'>
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
  return (
    <Container maxW='1200px' margin='auto' pt='5'>
      <Flex align='center'>
        <Box w='50%'>
          <Flex gap='2'>
            <FaArrowLeft />
            <Box>
              <Heading size='sm'>Pembayaran</Heading>
            </Box>
          </Flex>
        </Box>
        <Box w='50%'>
          <PaymentStep second={second} third={third} />
        </Box>
      </Flex>
    </Container>
  )
}

export default PaymentNavigation