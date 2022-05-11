import { ActionsTypes } from '../constants/actionsTypes'

const initialState = {
  cars: [],
  btn: ''
}

// lot data
export const carsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.SET_CARS:
      return { ...state, cars: payload }
    case ActionsTypes.FETCH_CARS:
      return { ...state, cars: payload }
    case ActionsTypes.SEARCH_CAR:
      return { ...state, cars: payload }
    default:
      return state
  }
}

// single data
export const carReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionsTypes.FETCH_CAR:
      return { ...state, ...payload }
    case ActionsTypes.REMOVE_CARS:
      return {}
    default:
      return state
  }
}

// global button
export const btnReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.SET_BUTTON:
      return { ...state, btn: payload }

    default:
      return state
  }
}