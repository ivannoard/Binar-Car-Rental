import { Box, Button, Container, Flex, Heading, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaCarAlt, FaRegCalendar, FaUserFriends } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeCar } from '../redux/actions/carActions'
import TemplateComponent from './TemplateComponent'

const CarDetailComponent = () => {
  const { id } = useParams()
  const cars = useSelector(state => state.allCars.cars)
  const button = useSelector(state => state.button.btn)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(removeCar())
    }
  }, [id])

  const detailData = cars.filter(item => item.id === id)[0]
  console.log(detailData);

  return (
    <TemplateComponent>
      <div className="CarDetail">
        <Box maxW='100%'>
          <Container maxW='1200px' margin='auto'>
            <Flex w='100%' justify='space-between' gap='10' wrap={{ base: 'wrap', md: 'nowrap' }} direction={{ base: 'column-reverse', md: 'row' }}>
              <Box w={{ base: '100%', md: '70%' }} >
                <Box p='5' rounded='lg' boxShadow='md'>
                  <Heading size='md' my='2'>Tentang Paket</Heading>
                  <Text>Include</Text>
                  <UnorderedList>
                    <ListItem>Apa saja yang termasuk dalam paket misal durasi max 12 jam</ListItem>
                    <ListItem>Sudah termasuk bensin selama 12 jam</ListItem>
                    <ListItem>Sudah termasuk Tiket Wisata</ListItem>
                    <ListItem>Sudah termasuk pajak</ListItem>
                  </UnorderedList>
                  <Text my='2'>Exclude</Text>
                  <UnorderedList>
                    <ListItem>Tidak termasuk biaya makan sopir Rp 75.000/hari</ListItem>
                    <ListItem>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</ListItem>
                    <ListItem>Tidak termasuk akomodasi penginapan</ListItem>
                  </UnorderedList>
                  <Heading size='md' my='2'>Refund, Reschedule, Overtime</Heading>
                  <UnorderedList>
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
                <Box maxW='100%' mt='3' pos='relative'>
                  <Link to='/payment'>
                    <Button colorScheme='green' pos='absolute' right='0'>Lanjutkan Pembayaran</Button>
                  </Link>
                </Box>
              </Box>
              <Box w={{ base: '100%', md: '30%' }} h='100%' rounded='lg' boxShadow='md' p='5'>
                <Image
                  src={detailData.docData.photocar}
                  h='160px'
                  w='100%'
                />
                <Text my='2'>{detailData.docData.namecar}</Text>
                <Box my='2'>
                  <Flex gap='2'>
                    <Box>
                      <Flex gap='1' align='center'>
                        <FaUserFriends />
                        <Text>{detailData.docData.passenger}</Text>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex gap='1' align='center'>
                        <FaCarAlt />
                        <Text>{detailData.docData.categorycar}</Text>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex gap='1' align='center'>
                        <FaRegCalendar />
                        <Text>Tahun {detailData.docData.year}</Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <Flex justify='space-between' mt='10' mb='3'>
                  <Text>Total</Text>
                  <Heading size='md'>Rp {detailData.docData.pricecar}</Heading>
                </Flex>
                <Link to='/payment'>
                  <Button colorScheme='green' w='100%'>{button}</Button>
                </Link>
              </Box>
            </Flex>
          </Container>
        </Box>
      </div>
    </TemplateComponent>
  )
}

export default CarDetailComponent