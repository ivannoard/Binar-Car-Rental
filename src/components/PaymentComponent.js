import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Box, Container, Flex, Text, Heading, Button, Center, UnorderedList, ListItem } from '@chakra-ui/react'
import { FaUserFriends, FaCarAlt, FaRegCalendar, FaCheck, FaChevronUp, FaChevronDown } from 'react-icons/fa'
import TemplateComponent from './TemplateComponent'

const PaymentComponent = () => {
  const [active, setActive] = useState('')
  const [detail, setDetail] = useState(false)
  const navigate = useNavigate()
  const { state } = useLocation()
  console.log(state.data)

  const bankArr = [{ name: 'BCA', detail: 'BCA Transfer' }, { name: 'BNI', detail: 'BNI Transfer' }, { name: 'Mandiri', detail: 'Mandiri Transfer' }]

  const handleActive = (name) => {
    setActive(name)
  }
  const handlePayment = () => {
    navigate('/payment/detail', { state: { car: state.data, bank: active } })
  }

  return (
    <>
      <TemplateComponent>
        <Box maxW='100%'>
          <Container maxW='1200px' margin='auto'>
            <Flex w='100%' justify='space-between' gap='10' wrap={{ base: 'wrap', md: 'nowrap' }}>
              <Box w={{ base: '100%', md: '70%' }} p='5' rounded='lg' boxShadow='md' h='100%'>
                <Heading size='md'>Pilih Bank Transfer</Heading>
                <Text mt='3'>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</Text>
                <Box mt='3'>

                  {bankArr.map((item) => (
                    <>
                      <Flex align='center' justify='space-between' pb='5' borderBottom='1px solid #E5E5E5' onClick={() => handleActive(item.name)} mt='7'>
                        <Flex align='center' gap='2'>
                          <Center bg='white' rounded='md' h='30px' px='18px' py='6px' border='1px solid #E5E5E5;'>{item.name}</Center>
                          <Text>{item.detail}</Text>
                        </Flex>
                        <Box pr='3'>
                          {active === item.name && <FaCheck color='green' />}
                        </Box>
                      </Flex>
                    </>
                  ))}

                </Box>
              </Box>

              <Box rounded='lg' boxShadow='md' w={{ base: '100%', md: '30%' }} h='100%' bg='white' p='5'>
                <Text my='2'>{state.data.docData.namecar} / {state.data.docData.categorycar}</Text>
                <Box my='2'>
                  <Flex gap='2'>
                    <Box>
                      <Flex gap='1' align='center'>
                        <FaUserFriends />
                        <Text>{state.data.docData.passenger}</Text>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex gap='1' align='center'>
                        <FaCarAlt />
                        <Text>{state.data.docData.transmission}</Text>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex gap='1' align='center'>
                        <FaRegCalendar />
                        <Text>Tahun {state.data.docData.year}</Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <Flex justify='space-between' mt='10' mb='3' onClick={() => setDetail(!detail)}>
                  <Flex gap='2'>
                    <Text>Total </Text>
                    {detail ? <FaChevronUp /> : <FaChevronDown />}
                  </Flex>
                  <Heading size='md'>Rp {state.data.docData.pricecar}</Heading>
                </Flex>
                {/* Detail */}
                {detail && (
                  <Box>
                    <Box mb='3'>
                      <Heading size='sm'>Harga</Heading>
                      <UnorderedList>
                        <ListItem>
                          <Flex justify='space-between'>
                            <Text>1 Mobil dengan sopir</Text>
                            <Text >Rp {state.data.docData.pricecar}</Text>
                          </Flex>
                        </ListItem>
                      </UnorderedList>
                    </Box>
                    <Box mb='3'>
                      <Heading size='sm'>Biaya Lainnya</Heading>
                      <UnorderedList>
                        <ListItem>
                          <Flex justify='space-between'>
                            <Text>Pajak</Text>
                            <Text color='green'>Termasuk</Text>
                          </Flex>
                        </ListItem>
                        <ListItem>
                          <Flex justify='space-between'>
                            <Text>Biaya Makan Sopir</Text>
                            <Text color='green'>Termasuk</Text>
                          </Flex>
                        </ListItem>
                      </UnorderedList>
                    </Box>
                    <Box mb='5'>
                      <Heading size='sm'>Belum Termasuk</Heading>
                      <UnorderedList>
                        <ListItem>
                          <Flex justify='space-between'>
                            <Text>Bensin</Text>
                            <Text color='red'>Tidak Termasuk</Text>
                          </Flex>
                        </ListItem>
                        <ListItem>
                          <Flex justify='space-between'>
                            <Text>Tol dan Parkir</Text>
                            <Text color='red'>Tidak Termasuk</Text>
                          </Flex>
                        </ListItem>
                      </UnorderedList>
                    </Box>
                  </Box>
                )}
                {/* <Link to='/payment/detail'> */}
                <Button colorScheme='green' w='100%' isDisabled={!active} onClick={() => handlePayment()}>Bayar</Button>
                {/* </Link> */}
              </Box>

            </Flex>
          </Container>
        </Box>
      </TemplateComponent>
    </>
  )
}

export default PaymentComponent