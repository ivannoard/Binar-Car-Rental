import React, { useState } from 'react'
import { Box, Container, Flex, Button, Heading, Text, Center, FormControl, FormLabel, Input, UnorderedList, ListItem } from '@chakra-ui/react'
import { FaFileImage } from 'react-icons/fa'
import { Link, useLocation } from "react-router-dom"
import TemplateComponent from './TemplateComponent'
const PaymentDetailComponent = () => {
  const [detail, setDetail] = useState(false)
  const { state } = useLocation()
  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const time = `${tomorrow.getHours()}:${tomorrow.getMinutes()}`
  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  return (
    <TemplateComponent>
      <Box maxW='100%'>
        <Container maxW='1200px' margin='auto' mt='5'>
          <Flex justify='space-between' gap='10' w='100%' wrap={{ base: 'wrap', md: 'nowrap' }}>
            <Box w={{ base: '100%', md: '70%' }} >
              <Flex align='center' rounded='lg' justify='space-between' boxShadow='md' bg='white' p='5'>
                <Box>
                  <Heading size='sm'>Selesaikan Pembayaran Sebelum</Heading>
                  <Text>{days[tomorrow.getDay() - 1]}, {tomorrow.getDate()} {monthNames[tomorrow.getMonth()]} {tomorrow.getFullYear()} jam {time} WIB</Text>
                </Box>
                <Box>
                  <Text fontSize='30px' color='tomato'>
                    {time}
                  </Text>
                </Box>
              </Flex>
              <Box rounded='lg' boxShadow='md' bg='white' p='5' mt='10'>
                <Heading size='sm'>Lakukan Transfer Ke</Heading>
                <Flex gap='2' mt='3'>
                  <Center bg='white' rounded='md' w='60px' h='30px' px='18px' py='6px' border='1px solid #E5E5E5;'>{state.bank}</Center>
                  <Box>
                    <Text>{state.bank} Transfer</Text>
                    <Text>a.n Binar Car Rental</Text>
                  </Box>
                </Flex>
                <FormControl mt={3}>
                  <FormLabel htmlFor='rekening' color='grey'>Nomor Rekening</FormLabel>
                  <Input id='rekening' type='text' w='100%' placeholder='No. Rekening' />
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel htmlFor='total' color='grey'>Total Bayar</FormLabel>
                  <Input id='total' type='text' w='100%' value={`Rp. ${state.car.docData.pricecar}`} isReadOnly />
                </FormControl>
              </Box>
              <Box rounded='lg' boxShadow='md' bg='white' p='5' mt='10'>
                <Heading size='sm' >Instruksi Pembayaran</Heading>
                <Flex wrap='wrap' mt='3'>
                  <Flex justify='space-between' w='100%' mb='3'>
                    <Text className='active'>ATM BCA</Text>
                    <Text>M-BCA</Text>
                    <Text>BCA Klik</Text>
                    <Text>Internet Banking</Text>
                  </Flex>
                  <Box>
                    <UnorderedList color='grey'>
                      <ListItem>Tidak termasuk biaya makan sopir Rp 75.000/hari</ListItem>
                      <ListItem>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</ListItem>
                      <ListItem>Tidak termasuk akomodasi penginapan</ListItem>
                      <ListItem>Tidak termasuk biaya makan sopir Rp 75.000/hari</ListItem>
                      <ListItem>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</ListItem>
                      <ListItem>Tidak termasuk akomodasi penginapan</ListItem>
                      <ListItem>Tidak termasuk biaya makan sopir Rp 75.000/hari</ListItem>
                      <ListItem>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</ListItem>
                      <ListItem>Tidak termasuk akomodasi penginapan</ListItem>
                    </UnorderedList>
                  </Box>
                </Flex>
              </Box>
            </Box>
            <Box w={{ base: '100%', md: '30%' }} h='100%' p='5' rounded='lg' boxShadow='md' bg='white'>
              {!detail ? (
                <>
                  <Text>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</Text>
                  <Button colorScheme='green' w='100%' mt='3' onClick={() => setDetail(true)}>Konfirmasi Pembayaran</Button>
                </>
              ) :
                <>
                  <Flex justify='space-between' align='center' mb='3'>
                    <Heading size='sm'>Konfirmasi Pembayaran</Heading>
                    <Text fontSize='20px' color='tomato'>
                      {time}
                    </Text>
                  </Flex>
                  <Text mb='3'>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</Text>
                  <Heading size='sm' as='h6' mb='2'>Upload Bukti Pembayaran</Heading>
                  <Text>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</Text>
                  <Box p='5' w='100%' h='200px'>
                    <Center bg='#EEEEEE' h='100%' rounded='lg'>
                      <FaFileImage color='grey' />
                    </Center>
                  </Box>
                  <Link to='/payment/invoice'>
                    <Button colorScheme='green' w='100%' mt='3'>Upload Bukti Pembayaran</Button>
                  </Link>
                </>
              }
            </Box>
          </Flex>
        </Container>
      </Box>
    </TemplateComponent>
  )
}

export default PaymentDetailComponent