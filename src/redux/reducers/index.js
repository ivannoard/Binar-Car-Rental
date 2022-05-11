import { combineReducers } from 'redux'
import { carsReducer, carReducer, btnReducer } from './carReducer'
import { userReducer } from './userReducer'
const reducers = combineReducers({
  allCars: carsReducer,
  carDetail: carReducer,
  button: btnReducer,
  users: userReducer
})

export default reducers