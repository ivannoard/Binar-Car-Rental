import { Box, Button, Circle, Container, Flex, FormControl, FormLabel, Heading, Image, Input, Select, Spacer, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import car from '../images/img_car.png'
import { useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import PaymentNavigation from './PaymentNavigation'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchCar } from '../redux/actions/carActions'
const HeaderComponent = () => {
  const cars = useSelector(state => state.allCars.cars)
  const location = useLocation()
  const dispatch = useDispatch()
  // style={{ paddingBottom: '70px' }}
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [time, setTime] = useState('')
  const [penumpang, setPenumpang] = useState('')
  function handleSearch() {
    console.log(name, category, time, penumpang);
    dispatch(searchCar(name, category, time, penumpang))
    setName('')
    setCategory('')
    setTime('')
    setPenumpang('')
  }

  let carsCategory = cars.map(item => item.category)
  carsCategory = [...new Set(new Set(carsCategory))].sort()
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  // if (cars.length !== 0) {
  //   const result = []
  //   cars.reduce((prev, current) => result.push(current.category))
  //   console.log(result);
  // }
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
            <Box>
              <Flex align='center' gap='4'>
                <Text>Our Services</Text>
                <Text>Why Us</Text>
                <Text>Testimonial</Text>
                <Text>FAQ</Text>
                <Button colorScheme='green' onClick={logout}>Logout</Button>
              </Flex>
            </Box>
          </Flex>
        </Container>
        {location.pathname === '/' ? (<Container maxW='1440px' margin='auto' pt='5'>
          <Flex align='center'>
            <Box w='50%'>
              <Heading>
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </Heading>
              <Text pr='100px'>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
              </Text>
            </Box>
            <Box w='50%'>
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
                <FormLabel htmlFor='namamobil'>Nama Mobil</FormLabel>
                <Select id='namamobil' placeholder='Nama Mobil' w='210px' isDisabled={location.pathname === '/' ? false : true} onChange={(e) => setName(e.target.value)}>
                  {cars.map(item => (
                    <option key={item.id} value={item.name} >{item.name}</option>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel htmlFor='ukuranmobil'>Ukuran Mobil</FormLabel>
                <Select id='ukuranmobil' placeholder='Ukuran Mobil' w='210px' isDisabled={location.pathname === '/' ? false : true} onChange={(e) => setCategory(e.target.value)} >
                  {carsCategory.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </Select>

              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel htmlFor='tahunmobil'>Tahun Mobil</FormLabel>
                <Select id='tahunmobil' placeholder='Tahun Mobil' w='210px' isDisabled={location.pathname === '/' ? false : true} onChange={(e) => setTime(e.target.value)} >
                  {cars.map(item => (
                    <option key={item.id} value={item.time}>{new Date(item.time).getFullYear()}</option>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel htmlFor='penumpang'>Jumlah Penumpang (optional)</FormLabel>
                <Select id='penumpang' placeholder='Jumlah Penumpang' w='210px' isDisabled={location.pathname === '/' ? false : true} onChange={(e) => setPenumpang(e.target.value)} >
                  {cars.map(item => (
                    <option key={item.id} value={item.penumpang}>{item.penumpang}</option>
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