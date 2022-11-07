const express = require("express");
const router = express.Router();
const {
  getUserFlights,
  setUserFlight,
  deleteUserFlight,
} = require("../controllers/flightController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getUserFlights).post(protect, setUserFlight);
router.route("/:id").delete(protect, deleteUserFlight);

module.exports = router;
