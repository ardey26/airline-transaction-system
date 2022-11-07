import axios from 'axios'

const API_URL = '/api/flights/'

// Create new goal
const createFlight = async (flightData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, flightData, config)

  return response.data
}

// Get user goals
const getFlights = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deleteFlight = async (flightId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + flightId, config)

  return response.data
}

const flightService = {
  createFlight,
  getFlights,
  deleteFlight,
}

export default flightService
