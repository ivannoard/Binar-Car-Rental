import { ActionsTypes } from '../constants/actionsTypes'

const initialState = {
  users: JSON.parse(localStorage.getItem("user")) || null,
}

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.ADD_USER:
      return { ...state, users: payload }
    case ActionsTypes.LOGIN:
      return { ...state, users: payload }
    case ActionsTypes.LOGOUT:
      return { ...state, users: payload }
    default:
      return state
  }
}