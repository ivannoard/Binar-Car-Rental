import { ActionsTypes } from '../constants/actionsTypes'


export const addUser = (user => {
  return {
    type: ActionsTypes.ADD_USER,
    payload: user
  }
})