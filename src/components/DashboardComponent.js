import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaCarAlt, FaRegCalendar, FaUserFriends } from 'react-icons/fa'
import { Link, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setButton, fetchCars } from '../redux/actions/carActions'
import { Skeleton, Stack } from '@chakra-ui/react'
import TemplateComponent from './TemplateComponent'
function SkeletonView() {
  const arr = []
  for (let i = 0; i < 3; i++) {
    arr.push(
      <div key={i}>
        <Box rounded='lg' boxShadow='md' w='333px' bg='white' p='5'>
          <Skeleton h='160px' w='100%' />
          <Stack>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
          </Stack>
          <Box my='2'>
            <Box>
              <Flex gap='1'>
                <FaUserFriends />
              </Flex>
            </Box>
            <Box>
              <Flex gap='1'>
                <FaCarAlt />
              </Flex>
            </Box>
            <Box>
              <Flex gap='1'>
                <FaRegCalendar />
              </Flex>
            </Box>
          </Box>
          <Skeleton height='20px' />
        </Box>
      </div >
    )
  }
  return arr
}
const DashboardComponent = () => {
  const cars = useSelector(state => state.allCars.cars)
  const button = useSelector(state => state.button.btn)
  const currentUser = useSelector(state => state.users.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setButton('Pilih Mobil'))
    dispatch(fetchCars())
  }, [])

  return (
    <>
      {currentUser.email !== 'admin@domain.tld' ?
        <TemplateComponent>
          <div className="Dashboard">
            <Box maxW='100%'>
              <Container maxW='1200px'>
                <Flex gap='5' justify='center' wrap='wrap'>
                  {cars.length !== 0 ? cars.map((car, index) => (
                    <Box key={car.id} rounded='lg' boxShadow='md' w='333px' bg='white' p='5'>
                      <Image
                        src={car.docData.photocar}
                        h='160px'
                        w='100%'
                      />
                      <Text my='2'>{car.docData.namecar} / {car.docData.categorycar}</Text>
                      <Heading size='md'>Rp {car.docData.pricecar} / hari</Heading>
                      <Text>{car.docData.description}</Text>
                      <Box my='2'>
                        <Box>
                          <Flex gap='1'>
                            <FaUserFriends />
                            <Text>{car.docData.passenger} orang</Text>
                          </Flex>
                        </Box>
                        <Box>
                          <Flex gap='1'>
                            <FaCarAlt />
                            <Text>{car.docData.transmission}</Text>
                          </Flex>
                        </Box>
                        <Box>
                          <Flex gap='1'>
                            <FaRegCalendar />
                            <Text>Tahun {car.docData.year}</Text>
                          </Flex>
                        </Box>
                      </Box>
                      <Link to={`/car-detail/${car.id}`}>
                        <Button colorScheme='green' w='100%'>{button}</Button>
                      </Link>
                    </Box>
                  )) :
                    <SkeletonView />
                  }
                </Flex>
              </Container>
            </Box>
          </div>
        </TemplateComponent> : <Navigate to='admin' />
      }
    </>
  )
}

export default DashboardComponent