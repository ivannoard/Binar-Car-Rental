import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Image, Select, Spacer, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import car from '../images/img_car.png'
import { useLocation, Link } from 'react-router-dom'
import PaymentNavigation from './PaymentNavigation'
import { useSelector, useDispatch } from 'react-redux'
import { searchField } from '../redux/actions/carActions'
import { logoutUser } from '../redux/actions/userAction'

const HeaderComponent = () => {
  const cars = useSelector(state => state.allCars.cars)
  const location = useLocation()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [time, setTime] = useState('')
  const [penumpang, setPenumpang] = useState('')

  function handleSearch() {
    dispatch(searchField(name, category, time, penumpang))
    setName('')
    setCategory('')
    setTime('')
    setPenumpang('')
  }

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  let carsCategory = cars.map(item => item.docData.categorycar)
  carsCategory = [...new Set(new Set(carsCategory))].sort()
  let carsYear = cars.map(item => item.docData.year)
  carsYear = [...new Set(new Set(carsYear))].sort()

  return (
    <div className="Header">
      <Box maxW='100%' bg='#F1F3FF' pt='3' pb={location.pathname !== '/' ? '70px' : ''}>
        <Container maxW='1440px' margin='auto'>
          <Flex align='center'>
            <Link to='/'>
              <Heading size='md'>
                Binar Car Rental
              </Heading>
            </Link>
            <Spacer />
            <Box display={{ base: 'none', md: 'block' }}>
              <Flex align='center' gap='4'>
                <Text>Our Services</Text>
                <Text>Why Us</Text>
                <Text>Testimonial</Text>
                <Text>FAQ</Text>
                <Button colorScheme='green' onClick={handleLogout}>Logout</Button>
              </Flex>
            </Box>
          </Flex>
        </Container>
        {location.pathname === '/' ? (<Container maxW='1440px' margin='auto' pt='5'>
          <Flex align='center' display='flex' wrap='wrap'>
            <Box w={{ base: '100%', md: '50%' }}>
              <Heading>
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </Heading>
              <Text pr='100px'>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
              </Text>
            </Box>
            <Box w={{ base: '100%', md: '50%' }}>
              <Image src={car}
                h='407px'
                w='704px' />
            </Box>
          </Flex>
        </Container>) :
          location.pathname === '/payment' ? <PaymentNavigation /> :
            location.pathname === '/payment/detail' ? <PaymentNavigation second={true} /> :
              location.pathname === '/payment/invoice' ? <PaymentNavigation second={true} third={true} /> : ''}
      </Box>
      <Container maxW='1200px' margin='auto' style={{ transform: 'translateY(-30px)' }}>
        <Box rounded='lg' boxShadow='md' p='6' bg='white'>
          <Flex gap='5' align='center' justify='space-between' wrap='wrap'>
            <Box>
              <FormControl>
                <FormLabel htmlFor='namamobil'>Car Name</FormLabel>
                <Select id='namamobil' placeholder='Nama Mobil' w='210px' isDisabled={location.pathname === '/' ? false : true} onChange={(e) => setName(e.target.value)}>
                  {cars.map(item => (
                    <option key={item.id} value={item.docData.namecar} >{item.docData.namecar}</option>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel htmlFor='ukuranmobil'>Car Category</FormLabel>
                <Select id='ukuranmobil' placeholder='Ukuran Mobil' w='210px' isDisabled={location.pathname === '/' ? false : true} onChange={(e) => setCategory(e.target.value)} >
                  {carsCategory.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </Select>

              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel htmlFor='tahunmobil'>Car Year</FormLabel>
                <Select id='tahunmobil' placeholder='Tahun Mobil' w='210px' isDisabled={location.pathname === '/' ? false : true} onChange={(e) => setTime(e.target.value)} >
                  {carsYear.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel htmlFor='penumpang'>Passenger (optional)</FormLabel>
                <Select id='penumpang' placeholder='Jumlah Penumpang' w='210px' isDisabled={location.pathname === '/' ? false : true} onChange={(e) => setPenumpang(e.target.value)} >
                  {cars.map(item => (
                    <option key={item.id} value={item.docData.passenger}>{item.docData.passenger}</option>
                  ))}
                </Select>
              </FormControl>
            </Box>
            {location.pathname === '/' ? (<Box mt='8'>
              <Button colorScheme='green' onClick={() => handleSearch()}>Cari Mobil</Button>
            </Box>) : ''}
          </Flex>
        </Box>
      </Container>
    </div>
  )
}

export default HeaderComponent