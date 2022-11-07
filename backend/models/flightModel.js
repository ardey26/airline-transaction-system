const mongoose = require("mongoose");

const flightSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    destination: {
      type: String,
      required: [true, "Please add a destination"],
    },
    origin: {
      type: String,
      required: [true, "Please add an origin"],
    },
    class: {
      type: String,
      required: [true, "Please enter a class"],
      enum: ["Economy", "Business", "First"],
    },
    numPassengers: {
      type: Number,
      min: [0, "You need atleast 1 passenger to book a flight."],
      max: [9, "You cannot have more than 9 passengers per booking."],
    },
    departure: {
      type: Date,
    },
    arrival: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);
