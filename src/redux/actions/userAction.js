import { ActionsTypes } from '../constants/actionsTypes'


export const addUser = (user => {
  return {
    type: ActionsTypes.ADD_USER,
    payload: user
  }
})
export const loginUser = (user => {
  return {
    type: ActionsTypes.LOGIN,
    payload: user
  }
})
export const logoutUser = (user => {
  return {
    type: ActionsTypes.LOGOUT,
    payload: null
  }
})