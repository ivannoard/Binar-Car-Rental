import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Flex, Text, Spacer, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button, Heading } from '@chakra-ui/react'
import { FaHome, FaCar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../redux/actions/userAction'
import { fetchCars } from '../../redux/actions/carActions'
import Chart from '../Chart'
const AdminComponent = () => {
  const dataCar = useSelector(state => state.allCars.cars)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutUser())
  }

  useEffect(() => {
    if (dataCar.length === 0) dispatch(fetchCars())
  }, [])

  return (
    <div className='Admin'>
      <Box maxW='100%' maxH='100vh'>
        <Flex h='100%'>
          {/* Side */}
          <Flex w='20%'>
            <Flex w='60px' bg='blue' h='100%' py='2' direction='column' align='center'>
              <Box w='30px' h='30px' bg='white'></Box>
              <Flex mt='30px' direction='column' align='center' gap='5'>
                <FaHome size='24px' color='white' cursor='pointer' />
                <FaCar size='24px' color='white' cursor='pointer' />
              </Flex>
            </Flex>
            <Box w='100%' bg='white' h='100%' borderRight='1px' borderColor='#c7c7c7'>
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
              <Box p='3' borderRadius='md' boxShadow='md' bg='white'><Heading size='md'>Dashboard</Heading></Box>
              <Box mt='3' p='3' borderRadius='md' boxShadow='md' bg='white'><Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /></Box>
              {/* Table */}
              <Box mt='3' p='3' borderRadius='md' boxShadow='md' bg='white'>
                <Heading size='md'>Sales Table</Heading>
                <TableContainer >
                  <Table variant='striped' colorScheme='linkedin'>
                    <Thead>
                      <Tr>
                        <Th>Nama</Th>
                        <Th>Kategori</Th>
                        <Th>Price</Th>
                        <Th>Penumpang</Th>
                        <Th>Transmisi</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {dataCar.map(item => (
                        <Tr key={item.id}>
                          <Td>{item.docData.namecar}</Td>
                          <Td>{item.docData.categorycar}</Td>
                          <Td >{item.docData.pricecar}</Td>
                          <Td >{item.docData.passenger}</Td>
                          <Td >{item.docData.transmission}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box >
    </div >
  )
}

export default AdminComponent