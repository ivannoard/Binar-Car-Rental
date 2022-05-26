import { ActionsTypes } from '../constants/actionsTypes'
import carsapi from '../../apis/carsApi'
import { collection, onSnapshot, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

export const fetchCars = () => {
  return async function (dispatch, getState) {
    try {
      const unsub = onSnapshot(
        collection(db, "cars"),
        (snapShot) => {
          let list = [];
          snapShot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          dispatch({ type: ActionsTypes.FETCH_CARS, payload: list })
        },
        (error) => {
          console.log(error);
        }
      );

      return () => {
        unsub();
      };
    } catch (err) {
      console.log('err' + err);
    }
  }
}

export const fetchCar = (id) => {
  return async function (dispatch) {
    try {
      const response = await carsapi.get('/mobil/' + id)
      dispatch({ type: ActionsTypes.FETCH_CAR, payload: response.data })
    } catch (err) {
      console.log(err);
    }
  }
}

export const setCars = (cars => {
  return {
    type: ActionsTypes.SET_CARS,
    payload: cars
  }
})

export const setCar = (car => {
  return {
    type: ActionsTypes.SET_CAR,
    payload: car
  }
})


export const searchField = (name = '', category = '', time = '', penumpang = '') => {
  return async function (dispatch) {
    try {
      const carsRef = collection(db, 'cars')
      const querySearch = name !== '' ? query(carsRef, where("docData.namecar", "==", name)) : category !== '' ? query(carsRef, where('docData.categorycar', '==', category)) : time !== '' ? query(carsRef, where('docData.year', '==', time)) : penumpang !== '' ? query(carsRef, where('docData.passenger', '==', penumpang)) : query(carsRef)
      const result = []
      const querySnapshot = await getDocs(querySearch);
      querySnapshot.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() })
        dispatch({ type: ActionsTypes.SEARCH_CAR, payload: result })
      });
    } catch (e) {
      console.log(e);
    }
  }
}

// export const searchCar = (name = '', category = '', time = '', penumpang = '') => {
//   return async function (dispatch) {
//     try {
//       const arr = []
//       if (name !== '') {
//         const response = await carsapi.get(`/mobil?name=${name}`)
//         arr.push(response.data)
//         if (category !== '') {
//           const response = await carsapi.get(`/mobil?category=${category}`)
//           arr.push(response.data)
//         } else if (time !== '') {
//           const response = await carsapi.get(`/mobil?time=${time}`)
//           arr.push(response.data)
//         } else if (penumpang !== '') {
//           const response = await carsapi.get(`/mobil?penumpang=${penumpang}`)
//           arr.push(response.data)
//         }
//       } else if (category !== '') {
//         const response = await carsapi.get(`/mobil?category=${category}`)
//         arr.push(response.data)
//       } else if (name === '' || category === '' || time === '' || penumpang === '') {
//         const response = await carsapi.get(`/mobil`)
//         arr.push(response.data)
//       }
//       const result = arr.reduce((prev, next) => prev.concat(next))
//       console.log(result);
//       dispatch({ type: ActionsTypes.SEARCH_CAR, payload: result })
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

export const setButton = (car => {
  return {
    type: ActionsTypes.SET_BUTTON,
    payload: car
  }
})

export const removeCar = () => {
  return {
    type: ActionsTypes.REMOVE_CARS,
  }
}