import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Flex, Text, Spacer, Button, Image, Heading, } from '@chakra-ui/react'
import { FaHome, FaCar, FaUserFriends, FaCarAlt, FaRegCalendar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../redux/actions/userAction'
import { fetchCars } from '../../redux/actions/carActions'
import { db } from "../../firebase";
import { deleteDoc, doc, } from "firebase/firestore";

const AdminListComponent = () => {
  const dataCar = useSelector(state => state.allCars.cars)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutUser())
  }
  useEffect(() => {
    if (dataCar.length === 0) dispatch(fetchCars())
  }, [])

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "cars", id));
      dispatch(fetchCars())
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='adminList'>
      <Box maxW='100%' maxH='100vh'>
        <Flex h={dataCar.length > 3 ? '100%' : '100vh'}>
          {/* Side */}
          <Flex w='20%'>
            <Flex w='60px' bg='blue' h='100%' py='2' direction='column' align='center'>
              <Box w='30px' h='30px' bg='white'></Box>
              <Flex mt='30px' direction='column' align='center' gap='5'>
                <FaHome size='24px' color='white' cursor='pointer' />
                <FaCar size='24px' color='white' cursor='pointer' />
              </Flex>
            </Flex>
            <Box w='100%' bg='white' h='100%' borderRight='1px' borderBottom='1px' borderColor='#c7c7c7'>
              <Box borderBottom='1px' borderColor='#c7c7c7' py='2'>
                <Text textAlign='center' fontSize='xl' fontWeight='bold'>
                  Dashboard
                </Text>
              </Box>
              <Flex mt='30px' direction='column' gap='5' align='center'>
                <Link to='/admin'>
                  <Text cursor='pointer'>Dashboard</Text>
                </Link>
                <Link to='/admin/list'>
                  <Text cursor='pointer'>List Cars</Text>
                </Link>
              </Flex>
            </Box>
          </Flex>
          {/* Main */}
          <Box w='80%'>
            {/* Nav */}
            <Box w='100%' px='3' borderBottom='1px' borderColor='#c7c7c7' py='2'>
              <Flex gap='2'>
                <Spacer />
                <Link to=''>
                  <Button colorScheme='blue' h='30px' w='100%' onClick={handleLogout}>Logout</Button>
                </Link>
              </Flex>

            </Box>
            {/* Main Content */}
            <Box px='3' pt='3' bg='#f0f0f7'>
              <Flex align='center' bg='white' p='3' borderRadius='md'>
                <Heading size='md'>List Cars</Heading>
                <Spacer />
                <Link to='/admin/add'>
                  <Button colorScheme='blue'>Add New Car</Button>
                </Link>
              </Flex>
              <Flex gap='3' bg='white' p='3' borderRadius='md' mt='3'>
                <Button colorScheme='blue' variant='outline'>
                  All
                </Button>
                <Button colorScheme='blue' variant='outline'>
                  Small
                </Button>
                <Button colorScheme='blue' variant='outline'>
                  Medium
                </Button>
                <Button colorScheme='blue' variant='outline'>
                  Large
                </Button>
              </Flex>
              <Flex wrap='wrap' gap='3' mt='3'>
                {dataCar.length !== 0 ? dataCar.map((car) => (
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
                    <Flex gap='2'>
                      <Box w='50%'>
                        <Link to={`/admin/update/${car.id}`}>
                          <Button colorScheme='yellow' w='100%'>Update</Button>
                        </Link>
                      </Box>
                      <Box w='50%'>
                        <Button colorScheme='red' w='100%' onClick={() => handleDelete(car.id)}>Delete</Button>
                      </Box>
                    </Flex>
                  </Box>
                )) :
                  'No Data'
                }
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box >
    </div >
  )
}

export default AdminListComponent