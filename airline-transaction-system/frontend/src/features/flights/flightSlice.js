import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import flightService from './flightService'

const initialState = {
  flights: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new flight
export const createFlight = createAsyncThunk(
  'flights/create',
  async (flightData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await flightService.createFlight(flightData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user flights
export const getFlights = createAsyncThunk(
  'flights/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await flightService.getFlights(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user flight
export const deleteFlight = createAsyncThunk(
  'flights/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await flightService.deleteFlight(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFlight.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createFlight.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.flights.push(action.payload)
      })
      .addCase(createFlight.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getFlights.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getFlights.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.flights = action.payload
      })
      .addCase(getFlights.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteFlight.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteFlight.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.flights = state.flights.filter(
          (flight) => flight._id !== action.payload.id
        )
      })
      .addCase(deleteFlight.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = flightSlice.actions
export default flightSlice.reducer
