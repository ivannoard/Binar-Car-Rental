import { ActionsTypes } from '../constants/actionsTypes'
import carsapi from '../../apis/carsApi'
import axios from 'axios'

export const fetchCars = () => {
  return async function (dispatch, getState) {
    try {
      // const response = await carsapi.get('/mobil').catch(err => console.log(err))
      const response = await carsapi.get('/mobil')
      dispatch({ type: ActionsTypes.FETCH_CARS, payload: response.data })
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

export const searchCar = (name = '', category = '', time = '', penumpang = '') => {
  return async function (dispatch) {
    try {
      const arr = []
      if (name !== '') {
        const response = await carsapi.get(`/mobil?name=${name}`)
        arr.push(response.data)
        if (category !== '') {
          const response = await carsapi.get(`/mobil?category=${category}`)
          arr.push(response.data)
        } else if (time !== '') {
          const response = await carsapi.get(`/mobil?time=${time}`)
          arr.push(response.data)
        } else if (penumpang !== '') {
          const response = await carsapi.get(`/mobil?penumpang=${penumpang}`)
          arr.push(response.data)
        }
      } else if (category !== '') {
        const response = await carsapi.get(`/mobil?category=${category}`)
        arr.push(response.data)
      } else if (name === '' || category === '' || time === '' || penumpang === '') {
        const response = await carsapi.get(`/mobil`)
        arr.push(response.data)
      }
      const result = arr.reduce((prev, next) => prev.concat(next))
      console.log(result);
      // const response = await carsapi.get(`/mobil?${name === '' ? '' : `name=${name}`}${category !== '' ? `&category=${category}` : ''}${time === '' ? '' : `&time=${time}`}${penumpang === '' ? '' : `&penumpang=${penumpang}`}`)
      dispatch({ type: ActionsTypes.SEARCH_CAR, payload: result })
    } catch (err) {
      console.log(err);
    }
  }
}

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