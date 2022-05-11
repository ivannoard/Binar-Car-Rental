import { ActionsTypes } from '../constants/actionsTypes'

const initialState = {
  users: []
}

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.ADD_USER:
      return { ...state, users: payload }

    default:
      return state
  }
}