import React from 'react'
import { Box, Container, Flex, Button, Heading, Text, Center, Circle } from '@chakra-ui/react'
import { FaFileImage, FaCheck } from 'react-icons/fa'
import TemplateComponent from './TemplateComponent'
const InvoiceComponent = () => {
  return (
    <>
      <TemplateComponent>
        <Box maxW='100%'>
          <Container maxW='1200px' margin='auto'>
            <Center mt='5' mb='5'>
              <Circle size='70px' bg='green' color='white'><FaCheck size='40px' /></Circle>
            </Center>
            <Center>
              <Box>
                <Heading size='md' align='center'>Pembayaran Berhasil!</Heading>
                <Text color='grey' align='center'>Tunjukkan invoice ini ke petugas BCR di titik temu.</Text>
              </Box>
            </Center>
            <Box boxShadow='md' bg='white' p='5' rounded='lg' maxW='605px' margin='auto' mt='3'>
              <Flex justify='space-between'>
                <Heading size='sm'>Invoice</Heading>
                <Button variant='outline' colorScheme='blue'>Unduh</Button>
              </Flex>
              <Text color='grey'>*no invoice</Text>
              <Box w='100%' h='200px' mt='3'>
                <Center bg='#EEEEEE' h='100%' rounded='lg'>
                  <FaFileImage color='grey' size='30px' />
                  <Text ml='3'>PDF Viewer</Text>
                </Center>
              </Box>
            </Box>

          </Container >
        </Box >
      </TemplateComponent>
    </>
  )
}

export default InvoiceComponent