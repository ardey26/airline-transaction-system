import React from "react";
import axios from "axios";

const Flights = ({ response }) => {
  const adults = response.num;
  const origin = response.origin;
  const destination = response.destination;
  const departure = response.departure;
  const cabinClass = response.class;
  let arrival;

  const API_KEY =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiY2I1ODgyMjFlNTgzYjA3ZDE2NmE0YWFkNjM4OWNlNWZmYzIyZDc1OWE5NzliYzUwNDgxOTlkNTE1N2VlZjdhODI4MmUwZDk5OGU2ZjZhOTUiLCJpYXQiOjE2Njc3MTM2MTUsIm5iZiI6MTY2NzcxMzYxNSwiZXhwIjoxNjk5MjQ5NjE1LCJzdWIiOiIxNzEzNCIsInNjb3BlcyI6W119.bJBhcK-8IOwoyMPzehBzMBJzUbCsvPogRsiMBrE44xJ22hc2_mY0ybUlvoPMhsicw_BrQUbmiLmjdpy4Stdx0g";
  const url = "http://app.goflightlabs.com/search-best-flights";
  let x;

  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://priceline-com-provider.p.rapidapi.com/v1/flights/search",
    params: {
      itinerary_type: "ONE_WAY",
      class_type: cabinClass,
      location_arrival: destination,
      date_departure: departure,
      location_departure: origin,
      sort_order: "PRICE",
      number_of_passengers: adults,
    },
    headers: {
      "X-RapidAPI-Key": "7d74c86230msh6c1a59b9ede9bdbp12e672jsn2a54b0d7e5d8",
      "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      const { filteredTripSummary } = response.data;

      const origin = filteredTripSummary.airport[0].origin;
      const destination = filteredTripSummary.airport[0].destination;
      const price = filteredTripSummary.airport[0].lowestTotalFare.amount;
      console.log(origin, destination, price);
    })
    .catch(function (error) {
      console.error(error);
    });
  return <h1></h1>;
};

export default Flights;
