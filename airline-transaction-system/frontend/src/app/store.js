import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import flightReducer from '../features/flights/flightSlice'

export const store = configureStore({
  // reducer: {
  //   auth: authReducer,
  //   flights: flightReducer,
  // },
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    flights: flightReducer
  }
})
