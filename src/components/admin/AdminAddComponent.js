import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Spacer, Button, Image, Alert, AlertIcon, FormControl, FormLabel, Input, Heading } from '@chakra-ui/react'
import { FaHome, FaCar } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actions/userAction'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../firebase'

const AdminAddComponent = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [photo, setPhoto] = useState('')
  const [category, setCategory] = useState('')
  const [transmission, setTransmission] = useState('')
  const [passenger, setPassenger] = useState('')
  const [year, setYear] = useState('')
  const [startrent, setStartRent] = useState('')
  const [finishrent, setFinishRent] = useState('')
  const [createdat, setCreatedAt] = useState('')
  const [updatedat, setUpdatedAt] = useState('')

  const [uploadPhoto, setUploadPhoto] = useState('')
  const [per, setPerc] = useState(null)
  const [flash, setFlash] = useState(false)

  const navigate = useNavigate()

  const docData = {
    namecar: name,
    pricecar: price,
    photocar: uploadPhoto,
    categorycar: category,
    transmission: transmission,
    passenger: passenger,
    year: year,
    startrent: startrent,
    finishrent: finishrent,
    createdat: serverTimestamp(),
    updatedat: serverTimestamp()
  }

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutUser())
  }

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + photo.name;

      console.log(name);
      const storageRef = ref(storage, photo.name);
      const uploadTask = uploadBytesResumable(storageRef, photo);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUploadPhoto(downloadURL);
          });
        }
      );
    };
    photo && uploadFile();
  }, [photo]);

  const handleAdd = async (e) => {
    e.preventDefault()
    try {
      const docRef = await addDoc(collection(db, "cars"), {
        docData
      });
      setFlash(true)
      navigate(-1)
    } catch (e) {
      console.log('Error: ' + e);
    }

  }
  return (
    <div className='adminAdd'>
      <Box maxW='100%' maxH='100vh'>
        <Flex h='100vh'>
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
            <Box px='3' pt='3' bg='#f0f0f7' h='680px'>
              <Box bg='white' borderRadius='md' p='3'><Heading size='md'>Add Car</Heading></Box>
              <Flex>
                <Box mt='3'>
                  <form>
                    <Flex gap='3'>
                      <Box bg='white' borderRadius='md' p='3'>
                        <FormControl mb='3' mt='3'>
                          <FormLabel htmlFor='namecar'>Name Car</FormLabel>
                          <Input id='namecar' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                        </FormControl>
                        <FormControl mb='3'>
                          <FormLabel htmlFor='pricecar'>Price Car</FormLabel>
                          <Input id='pricecar' type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
                        </FormControl>
                        <FormControl mb='3'>
                          <FormLabel htmlFor='photocar'>Photo Car</FormLabel>
                          <input id='photocar' type='file' name='photocar' onChange={(e) => setPhoto(e.target.files[0])}></input>
                        </FormControl>
                        <FormControl mb='3'>
                          <FormLabel htmlFor='categorycar'>Category Car</FormLabel>
                          < Input id='categorycar' type='text' value={category} onChange={(e) => setCategory(e.target.value)} />
                        </FormControl >
                        <FormControl mb='3'>
                          <FormLabel htmlFor='transmission'>Transmission Car</FormLabel>
                          < Input id='transmission' type='text' value={transmission} onChange={(e) => setTransmission(e.target.value)} />
                        </FormControl >
                        <Button isDisabled={per !== null && per < 100} colorScheme='blue' onClick={handleAdd}>Add New Car</Button>
                      </Box>
                      <Box bg='white' borderRadius='md' p='3'>
                        <FormControl mb='3' mt='3'>
                          <FormLabel htmlFor='passenger'>Passenger Car</FormLabel>
                          < Input id='passenger' type='text' value={passenger} onChange={(e) => setPassenger(e.target.value)} />
                        </FormControl >
                        <FormControl mb='3'>
                          <FormLabel htmlFor='year'>Year</FormLabel>
                          < Input id='year' type='number' value={year} onChange={(e) => setYear(e.target.value)} />
                        </FormControl >
                        <FormControl mb='3'>
                          <FormLabel htmlFor='startrent'>Start Rent Car</FormLabel>
                          < Input id='startrent' type='date' value={startrent} onChange={(e) => setStartRent(e.target.value)} />
                        </FormControl >
                        <FormControl mb='3'>
                          <FormLabel htmlFor='finishrent'>Finish Rent Car</FormLabel>
                          < Input id='finishrent' type='date' value={finishrent} onChange={(e) => setFinishRent(e.target.value)} />
                        </FormControl >
                        <FormControl mb='3'>
                          <FormLabel htmlFor='createdat'>Created_at Car</FormLabel>
                          < Input id='createdat' isDisabled type='text' value={createdat} />
                        </FormControl >
                        <FormControl mb='3'>
                          <FormLabel htmlFor='updatedat'>Updated_at Car</FormLabel>
                          < Input id='updatedat' isDisabled type='text' value={updatedat} />
                        </FormControl >
                      </Box>
                    </Flex>
                  </form >
                </Box>
                <Box ml='5' >
                  <Box mt='3' bg='white' borderRadius='md' p='3'>
                    <Image src={
                      photo
                        ? URL.createObjectURL(photo)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                      alt="" mx='auto' w='500px' />
                    {flash && <Alert mt='3' status='success'>
                      <AlertIcon />
                      Data uploaded to the server. Fire on!
                    </Alert>}
                  </Box>
                </Box>
              </Flex>
            </Box >
          </Box >
        </Flex >
      </Box >
    </div >
  )
}

export default AdminAddComponent