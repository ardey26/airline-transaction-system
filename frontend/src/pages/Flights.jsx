import React, { useState, useEffect } from "react";
import "intro.js/introjs.css";
import { Steps, Hints } from "intro.js-react";

const airports = require("../mock_datasets/airports.json");
const Flights = ({ response }) => {
  const itinerary = response.itinerary_type;
  const adults = response.num;
  const origin = response.origin;
  const destination = response.destination;
  const departure = response.departure;
  const cabinClass = response.class;
  const arrival = response.arrival;

  const destination_countries = airports.filter((airport) => {
    return airport.country == response.destination;
  });

  const origin_countries = airports.filter((airport) => {
    return airport.country == response.origin;
  });

  const min_results = Math.min(
    destination_countries.length,
    origin_countries.length
  );
  const num_results = Math.floor(Math.random() * 10) + 1;

  let results = [];

  for (let i = 0; i <= num_results; i++) {
    let results_obj = {};
    results_obj.destination =
      destination_countries[
        Math.floor(Math.random() * destination_countries.length)
      ];

    results_obj.origin =
      origin_countries[Math.floor(Math.random() * origin_countries.length)];

    results_obj.price =
      Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000;

    results.push(results_obj);
  }
  const steps = [
    {
      element: ".step-3-1",
      intro:
        "These results are based off of your preferences at one point in time",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      element: ".step-3-2",
      intro:
        "This panel gives information about the origin and destination with cities",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      element: ".step-3-3",
      intro: "This primarily gives you the price",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      element: ".step-3-4",
      intro: "Try to click this one to know more about the listing.",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
  ];

  return (
    <div className="mb-3 step-3-1">
      <Steps enabled={true} steps={steps} initialStep={0} />
      <div className="display-1 mb-3">
        {origin} to {destination}
      </div>
      {results.map((result, k) => {
        if (itinerary === "ONE_WAY") {
          return (
            <p>
              <div class="card w-100">
                <h1 class="card-title step-3-2">
                  Flight {k}:{" "}
                  {result.origin.city == "Nan"
                    ? null
                    : result.origin.city + ","}{" "}
                  {result.origin.country} to{" "}
                  {result.destination.city == "Nan"
                    ? null
                    : result.destination.city + ", "}
                  {result.destination.country}
                </h1>
                <div class="card-body">
                  <p class="card-text display-6 step-3-3">
                    Price: {result.price}
                  </p>
                  <a href="#" class="btn btn-primary step-3-4">
                    Know more
                  </a>
                </div>
              </div>
            </p>
          );
        } else {
          return (
            <p>
              <div class="card w-100">
                <h1 class="card-title align-items-left step-3-2">
                  Flight {k}:{" "}
                  {result.origin.city == "Nan"
                    ? null
                    : result.origin.city + ","}{" "}
                  {result.origin.country} to{" "}
                  {result.destination.city == "Nan"
                    ? null
                    : result.destination.city + ", "}
                  {result.destination.country}
                </h1>
                <div class="card-body">
                  <p class="card-text display-6 step-3-3">
                    Price: {result.price}
                  </p>
                  <a href="#" class="btn btn-primary step-3-4">
                    Know more
                  </a>
                </div>
              </div>
            </p>
          );
        }
      })}{" "}
    </div>
  );
};

export default Flights;
