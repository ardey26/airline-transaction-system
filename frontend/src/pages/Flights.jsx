import React, { useState, useEffect } from "react";
import axios from "axios";

const Flights = ({ response }) => {
  const adults = response.num;
  const origin = response.origin;
  const destination = response.destination;
  const departure = response.departure;
  const cabinClass = response.class;
  const arrival = response.arrival;

  const API_KEY = "810ac4160fmsha95cd7639eeb9a5p19b13cjsna893908ac7a2";
  const API_HOST = "priceline-com-provider.p.rapidapi.com";
  const url = "https://priceline-com-provider.p.rapidapi.com/v1/flights/search";

  const options = {
    method: "GET",
    url: url,
    params: {
      itinerary_type: "ONE_WAY",
      class_type: cabinClass,
      location_arrival: destination,
      date_departure: departure,
      location_departure: origin,
      sort_order: "PRICE",
      number_of_passengers: adults,
      // date_departure_return: arrival === "" ? arrival : null,
    },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  };

  // const [results, setResults] = useState([]);
  const results = axios.request(options).then((res) => {
    console.log(res.data);
  });
  // axios
  //   .request(options)
  //   .then(function (response) {
  //     const { filteredTripSummary } = response.data;

  //     if (!filteredTripSummary) {
  //       return console.log("NO RESULTS");
  //     }

  //     const num_of_results = 10;
  //     const { airport, airline, carrier } = filteredTripSummary;

  //     const max_results =
  //       num_of_results > airline.length ? airline.length : num_of_results;

  //     for (let i = 0; i < max_results; i++) {
  //       let result_obj = {};
  //       const { origin, destination } = airport[0];
  //       const { amount, currency } = airline[i].lowestTotalFare;
  //       const { code } = airline[i];

  //       const carrier_code = carrier[i].code;

  //       result_obj = {
  //         origin: origin,
  //         destination: destination,
  //         amount: amount,
  //         currency: currency,
  //         airline_code: code,
  //         carrier_code: carrier_code,
  //       };

  //       setResults([...results, result_obj]);
  //     }

  //     console.log(results);
  //     console.log(filteredTripSummary);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  return <div> </div>;
};

export default Flights;
