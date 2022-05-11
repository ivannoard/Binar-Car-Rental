import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Box, Container, Flex, Text, Heading, Button, Center, UnorderedList, ListItem } from '@chakra-ui/react'
import { FaUserFriends, FaCarAlt, FaRegCalendar, FaCheck, FaChevronUp, FaChevronDown } from 'react-icons/fa'
import TemplateComponent from './TemplateComponent'

const BankTransfer = (active, setActive, name, detail) => {
  return (
    <Flex align='center' justify='space-between' pb='5' borderBottom='1px solid #E5E5E5' onClick={() => setActive(!active)} mt='7'>
      <Flex align='center' gap='2'>
        <Center bg='white' rounded='md' h='30px' px='18px' py='6px' border='1px solid #E5E5E5;'>{name}</Center>
        <Text>{detail}</Text>
      </Flex>
      <Box pr='3'>
        {active && <FaCheck color='green' />}
      </Box>
    </Flex>
  )
}

const PaymentComponent = () => {
  const [active, setActive] = useState(false)
  const [detail, setDetail] = useState(false)
  return (
    <>
      <TemplateComponent>
        <Box maxW='100%'>
          <Container maxW='1200px' margin='auto'>
            <Flex w='100%' justify='space-between' gap='10'>
              <Box w='70%' p='5' rounded='lg' boxShadow='md' h='100%'>
                <Heading size='md'>Pilih Bank Transfer</Heading>
                <Text mt='3'>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</Text>
                <Box mt='3'>

                  {BankTransfer(active, setActive, 'BCA', 'BCA Transfer')}
                  {BankTransfer(active, setActive, 'BNI', 'BNI Transfer')}
                  {BankTransfer(active, setActive, 'Mandiri', 'Mandiri Transfer')}

                </Box>
              </Box>

              <Box rounded='lg' boxShadow='md' w='30%' h='100%' bg='white' p='5'>
                <Text my='2'>Nama / Tipe Mobil</Text>
                <Box my='2'>
                  <Flex gap='2'>
                    <Box>
                      <Flex gap='1' align='center'>
                        <FaUserFriends />
                        <Text>4 orang</Text>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex gap='1' align='center'>
                        <FaCarAlt />
                        <Text>Manual</Text>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex gap='1' align='center'>
                        <FaRegCalendar />
                        <Text>Tahun 2020</Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <Flex justify='space-between' mt='10' mb='3' onClick={() => setDetail(!detail)}>
                  <Flex gap='2'>
                    <Text>Total </Text>
                    {detail ? <FaChevronUp /> : <FaChevronDown />}
                  </Flex>
                  <Heading size='md'>Rp 430.000</Heading>
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
                            <Text >Rp 430.000</Text>
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
                <Link to='/payment/detail'>
                  <Button colorScheme='green' w='100%' isDisabled={!active}>Bayar</Button>
                </Link>
              </Box>

            </Flex>
          </Container>
        </Box>
      </TemplateComponent>
    </>
  )
}

export default PaymentComponent