import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

import "react-datepicker/dist/react-datepicker.css";

import { OneRound } from "../components/Book/OneRound";
import { Origin } from "../components/Book/Origin";
import { Class } from "../components/Book/Class";
import { Destination } from "../components/Book/Destination";
import { Passenger } from "../components/Book/Passenger";
import Calendar from "../components/Book/Calendar";
import CalendarRange from "../components/Book/CalendarRange";
import Submit from "../components/Book/Submit";

import "intro.js/introjs.css";
import { Steps, Hints } from "intro.js-react";

export const Book = ({ getData, response }) => {
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [toggle, setToggle] = useState({
    oneway: true,
    roundtrip: false,
  });

  const date = new Date().toJSON();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    itinerary_type: "ONE_WAY",
    destination: "",
    origin: "",
    class: "ECO",
    num: "0",
    departure: startDate,
    arrival: "",
  });

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    console.log(response);
  }, [response]);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(toggle);
    setData({
      itinerary_type:
        data.itinerary_type === "ONE_WAY" ? "ROUND_TRIP" : "ONE_WAY",
      destination: "",
      origin: "",
      class: "ECO",
      num: 0,
      departure: startDate,
      arrival: "",
    });

    console.log(data);
  }, [toggle]);

  if (isLoading) {
    return <Spinner />;
  }

  let countries = [
    { label: "Thailand", value: "Thailand" },
    { label: "France", value: "France" },
    { label: "United Kingdom", value: "United Kingdom" },
    { label: "Japan", value: "Japan" },
    { label: "Singapore", value: "Singapore" },
    { label: "United States of America", value: "United States" },
    { label: "Hongkong", value: "Hong Kong" },
    { label: "Malaysia", value: "Malaysia" },
    { label: "United Arab Emirates", value: "United Arab Emirates" },
    { label: "Philippines", value: "Philippines" },
  ];

  let classes = [
    { label: "Economy Class", value: "ECO" },
    { label: "Business Class", value: "BUS" },
    { label: "Premium Economy Class", value: "PEC" },
    { label: "First Class", value: "FST" },
  ];

  let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const steps = [
    {
      element: ".step-3",
      intro:
        "This is the form body, you use this to search for flights that are most relevant to your preferences!",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      element: ".step-4",
      intro: "Toggle this one if you want to look for one way flights",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      element: ".step-5",
      intro: "Toggle this one if you want to look for round trip flights",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      element: ".step-6",
      intro: "Select a country from this dropdown to specify country of origin",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      element: ".step-7",
      intro: "Where'd you wanna go?",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      element: ".step-8",
      intro:
        "Specify how you want to travel: Economy, Premium Economy, Business, or First Class?",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      element: ".step-9",
      intro: "When are you planning on leaving?",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      element: ".step-10",
      intro: "When are you coming back?",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      element: ".passenger-step",
      intro: "How many will travel?",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      element: ".last-step",
      intro:
        'All set? click on "SEARCH FLIGHTS" submit the form so that we can start looking for flights!',
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
  ];

  const handleDestinationChange = (e) => {
    setData({ ...data, destination: e.target.value });
    console.log(data);
  };

  const handleOriginChange = (e) => {
    setData({ ...data, origin: e.target.value });
  };

  const handleClassChange = (e) => {
    setData({ ...data, class: e.target.value });
  };

  const handleNumChange = (e) => {
    setData({ ...data, num: e.target.value });
  };

  const handleDepartureChange = (date) => {
    setData({ ...data, departure: date.toISOString().split("T")[0] });
  };

  const handleArrivalChange = (date) => {
    setData({ ...data, arrival: date.toISOString().split("T")[0] });
  };

  const handleOneWayChange = (e) => {
    setData({ ...data, itinerary_type: "ONE_WAY", arrival: "" });
  };

  const handleRoundTripChange = (e) => {
    setData({ ...data, itinerary_type: "ROUND_TRIP" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(data);
    // dispatch(createFlight({ data }));
    setData("");
    navigate("/flights");
  };
  return (
    <div>
      <Steps enabled={true} steps={steps} initialStep={0} />
      <div className="card py-3" style={{ height: "h-100" }}>
        <div className="card-body step-3">
          <form class="row g-3" onSubmit={handleSubmit}>
            <OneRound
              toggle={toggle}
              setToggle={setToggle}
              handleOneWayChange={handleOneWayChange}
              handleRoundTripChange={handleRoundTripChange}
              data={data}
            />
            <Origin
              handleOriginChange={handleOriginChange}
              countries={countries}
            />
            <Class handleClassChange={handleClassChange} classes={classes} />
            <Destination
              handleDestinationChange={handleDestinationChange}
              countries={countries}
              data={data}
            />
            <Passenger handleNumChange={handleNumChange} num={num} />
            <Calendar
              handleDepartureChange={handleDepartureChange}
              handleArrivalChange={handleArrivalChange}
              data={data}
            />
            <div class="col-md-6">
              <button type="submit" class="btn btn-outline-primary mt-3">
                SEARCH FLIGHT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
