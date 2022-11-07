const asyncHandler = require('express-async-handler')

const Flight = require('../models/flightModel')
const User = require('../models/userModel')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getUserFlights = asyncHandler(async (req, res) => {
  const flights = await Flight.find({ user: req.user.id })

  res.status(200).json(flights)
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setUserFlight = asyncHandler(async (req, res) => {

  const flight = await Flight.create({
    user: req.user.id,
    destination: req.body.destination,
    origin: req.body.origin,
    class: req.body.class,
    numPassengers: req.body.num,
    departure: req.body.departure,
    arrival: req.body.arrival
  })

  res.status(200).json(flight)
})

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
// const updateGoal = asyncHandler(async (req, res) => {
//   const goal = await Goal.findById(req.params.id)

//   if (!goal) {
//     res.status(400)
//     throw new Error('Goal not found')
//   }

//   // Check for user
//   if (!req.user) {
//     res.status(401)
//     throw new Error('User not found')
//   }

//   // Make sure the logged in user matches the goal user
//   if (goal.user.toString() !== req.user.id) {
//     res.status(401)
//     throw new Error('User not authorized')
//   }

//   const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   })

//   res.status(200).json(updatedGoal)
// })

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteUserFlight = asyncHandler(async (req, res) => {
  const flight = await Flight.findById(req.params.id)

  if (!flight) {
    res.status(400)
    throw new Error('Flight not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (flight.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await flight.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getUserFlights,
  setUserFlight,
//   updateGoal,
  deleteUserFlight,
}
