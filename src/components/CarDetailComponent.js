import { Box, Button, Container, Flex, Heading, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaCarAlt, FaRegCalendar, FaUserFriends } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setCar, setButton, removeCar, fetchCar } from '../redux/actions/carActions'
import TemplateComponent from './TemplateComponent'
const CarDetailComponent = () => {
  const { id } = useParams()

  const carData = useSelector((state) => state.carDetail)
  const button = useSelector(state => state.button.btn)
  // const time = new Date(carData.time).getFullYear()
  const dispatch = useDispatch()

  // const fetchCar = async (id) => {
  //   const response = await axios.get("https://625bcc2d50128c57020785c4.mockapi.io/binarcar/mobil/" + id)
  //     .catch(err => console.log('error: ', err))
  //   dispatch(setCar(response.data))
  //   dispatch(setButton('Lanjutkan Pembayaran'))
  // }

  useEffect(() => {
    if (id && id !== "") dispatch(fetchCar(id))
    return () => {
      dispatch(removeCar())
    }
  }, [id])

  console.log(carData);

  return (
    <TemplateComponent>
      <div className="CarDetail">
        <Box maxW='100%'>
          <Container maxW='1200px' margin='auto'>
            <Flex w='100%' justify='space-between' gap='10'>
              <Box w='70%' >
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
              <Box w='30%' h='100%' rounded='lg' boxShadow='md' p='5'>
                <Image
                  src={carData.image}
                  h='160px'
                  w='100%'
                />
                <Text my='2'>{carData.name}</Text>
                <Box my='2'>
                  <Flex gap='2'>
                    <Box>
                      <Flex gap='1' align='center'>
                        <FaUserFriends />
                        <Text>{carData.penumpang}</Text>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex gap='1' align='center'>
                        <FaCarAlt />
                        <Text>{carData.category}</Text>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex gap='1' align='center'>
                        <FaRegCalendar />
                        <Text>Tahun {new Date(carData.time).getFullYear()}</Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <Flex justify='space-between' mt='10' mb='3'>
                  <Text>Total</Text>
                  <Heading size='md'>Rp {carData.price}</Heading>
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