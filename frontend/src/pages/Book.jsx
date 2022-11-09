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
    { label: "Bangkok, Thailand (BKK)", value: "BKK" },
    { label: "Paris, France (PAR)", value: "PAR" },
    { label: "London, United Kingdom (LCY)", value: "LCY" },
    { label: "Tokyo, Japan (HND)", value: "HND" },
    { label: "Singapore, Singapore (SIN)", value: "SIN" },
    { label: "New York, USA (NYC)", value: "NYC" },
    { label: "Hongkong, Hongkong (HKG)", value: "HKG" },
    { label: "Kuala Lumpur, Malaysia (KUL)", value: "KUL" },
    { label: "Dubai, United Arab Emirates (DXB)", value: "DXB" },
    { label: "Manila, Philippines (MNL)", value: "MNL" },
  ];

  let classes = [
    { label: "Economy Class", value: "ECO" },
    { label: "Business Class", value: "BUS" },
    { label: "Premium Economy Class", value: "PEC" },
    { label: "First Class", value: "FST" },
  ];

  let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

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
      <div className="card py-3" style={{ height: "h-100" }}>
        <div className="card-body">
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
