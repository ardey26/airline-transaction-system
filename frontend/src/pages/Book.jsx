import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import { useSelector, useDispatch } from "react-redux";
import { MdDateRange } from 'react-icons/md'
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

import "react-datepicker/dist/react-datepicker.css";
import { createFlight } from "../features/flights/flightSlice";

export const Book = () => {
  

  const [startDate, setStartDate] = useState(new Date());
  const [toggle, setToggle] = useState({
    oneway: true,
    roundtrip: false,
  })

  const date = new Date().toJSON();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    destination: "",
    origin: "",
    class: "Economy",
    num: 0,
    departure: startDate,
    arrival: '',
  });

  const [dateRange, setDateRange] = useState([null, null]);
  const [beginDate, endDate] = dateRange;

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

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
  }, [data])

  useEffect(() => {
    console.log(toggle);
  }, [toggle])


  if (isLoading) {
    return <Spinner />;
  }

  let countries = [
    { label: "Atlanta, United States of America (ATL)", value: "ATL" },
    { label: "Beijing, China (PEK)", value: "PEK" },
    { label: "London, United Kingdom (LHR)", value: "LHR" },
    { label: "Tokyo, Japan (HND)", value: "HND" },
    { label: "Paris, France (CDG)", value: "CDG" },
    { label: "Frankfurt, Germany (FRA)", value: "FRA" },
    { label: "Hongkong, Hongkong (HKG)", value: "HKG" },
    { label: "Madrid, Spain (MAD)", value: "MAD" },
    { label: "Dubai, United Arab Emirates (DXB)", value: "DXB" },
    { label: "Manila, Philippines (MNL)", value: "MNL" },
  ];

  let classes = [
    { label: "Economy Class", value: "Economy" },
    { label: "Business Class", value: "Business" },
    { label: "First Class", value: "First" },
  ];

  let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  const handleDestinationChange = (e) => {
    setData({ ...data, destination: e.target.value });
    console.log(data)
  };

  const handleOriginChange = (e) => {
    setData({ ...data, origin: e.target.value });
  };

  const handleClassChange = (e) => {
    setData({ ...data, class: e.target.value });
  };

  const handleNumChange = (e) => {
    setData({ ...data, num: parseInt(e.target.value) });
  };

  const handleDepartureChange = (date) => {
    setData({ ...data, departure: date });
  };

  const handleArrivalChange = (e) => {
    setData({ ...data, arrival: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(createFlight({ data }))
    setData('')
  }
  if (toggle.oneway === false && toggle.roundtrip === true) {
    return (
      <div>
      <div className="card py-3" style={{ height: "h-100" }}>
        <div className="card-body">
          <form class="row g-3" onSubmit={handleSubmit}>

            <div class="col-md-6">
            <input type="radio" class="btn-check" name="options-outlined" id="oneWay" checked={toggle.oneway} />
            <label class="btn btn-outline-primary btn-block btn-lg" for="success-outlined" onClick={() => setToggle({oneway: true, roundtrip: false})}>ONE WAY</label>
            </div>

            <div class="col-md-6">
            <input type="radio" class="btn-check" name="options-outlined" id="oneWay" checked={toggle.roundtrip} />
<label class="btn btn-outline-primary btn-block btn-lg" for="danger-outlined" onClick={() => setToggle({oneway: false, roundtrip: true})}>ROUND TRIP</label>
            </div>
            
            <div class="col-md-6">
            <label for="inputState" class="form-label">
                FROM
              </label>
              <select id="inputState" class="form-select form-control-lg" onChange={handleOriginChange}>
                <option selected>Choose...</option>
                {countries.map((country) => <option value={country.value}> {country.label} </option>)}
              </select>
            </div>
            <div class="col-md-6">
            <label for="inputState" class="form-label">
                CLASS
              </label>
              <select id="inputState" class="form-select form-control-lg" onChange={handleClassChange}>
                <option selected>Choose...</option>
                {classes.map((item) => <option value={item.value}>{item.label}</option>)}
              </select>
            </div>
            <div class="col-md-6">
            <label for="inputState" class="form-label">
                TO
              </label>
              <select id="inputState" class="form-select form-control-lg" onChange={handleDestinationChange}>
                <option selected>Choose...</option>
                {countries.map((country) => <option value={country.value}>{country.label}</option>)}
              </select>
            </div>
            <div class="col-md-6">
            <label for="inputState" class="form-label">
                PASSENGER
              </label>
              <select id="inputState" class="form-select form-control-lg"  onChange={handleNumChange}>
                <option selected>Choose...</option>

                {num.map(i => <option value={i}> {i} </option>)}
              </select>
            </div>
            <div class="col-md-6">
                TRAVEL DATES: <MdDateRange size={20}/> <DatePicker selectsRange={true} startDate={beginDate} endDate={endDate} withPortal minDate={new Date()}onChange={(date) => setDateRange(date)} />
            </div>
            <div class="col-md-6">
        
            <button type="submit" class="btn btn-outline-primary mt-3">
                SEARCH FLIGHT
              </button>
            </div>

          </form>
        </div>
      </div>
      
    </div>
    )
  }
  else {return (
    <div>
      <div className="card py-3" style={{ height: "h-100" }}>
        <div className="card-body">
          <form class="row g-3" onSubmit={handleSubmit}>

            <div class="col-md-6">
            <input type="radio" class="btn-check" name="options-outlined" id="oneWay" checked={toggle.oneway} />
            <label class="btn btn-outline-primary btn-block btn-lg" for="success-outlined" onClick={() => setToggle({oneway: true, roundtrip: false})}>ONE WAY</label>
            </div>

            <div class="col-md-6">
            <input type="radio" class="btn-check" name="options-outlined" id="oneWay" checked={toggle.roundtrip} />
<label class="btn btn-outline-primary btn-block btn-lg" for="danger-outlined" onClick={() => setToggle({oneway: false, roundtrip: true})}>ROUND TRIP</label>
            </div>
            
            <div class="col-md-6">
            <label for="inputState" class="form-label">
                FROM
              </label>
              <select id="inputState" class="form-select form-control-lg" onChange={handleDestinationChange}>
                <option selected>Choose...</option>
                {countries.map((country) => <option value={country.value}> {country.label} </option>)}
              </select>
            </div>
            <div class="col-md-6">
            <label for="inputState" class="form-label">
                CLASS
              </label>
              <select id="inputState" class="form-select form-control-lg" onChange={handleClassChange}>
                <option selected>Choose...</option>
                {classes.map((item) => <option value={item.value}>{item.label}</option>)}
              </select>
            </div>
            <div class="col-md-6">
            <label for="inputState" class="form-label">
                TO
              </label>
              <select id="inputState" class="form-select form-control-lg" onChange={handleOriginChange}>
                <option selected>Choose...</option>
                {countries.map((country) => <option value={country.value}> {country.label} </option>)}
              </select>
            </div>
            <div class="col-md-6">
            <label for="inputState" class="form-label">
                PASSENGER
              </label>
              <select id="inputState" class="form-select form-control-lg"  onChange={handleNumChange}>
                <option selected>Choose...</option>

                {num.map(i => <option value={i}> {i} </option>)}
              </select>
            </div>
            <div class="col-md-6">
                TRAVEL DATE: <MdDateRange size={20}/> <DatePicker withPortal  minDate={new Date()} selected={data.departure} onChange={(date) => handleDepartureChange(date)} />
            </div>
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
  }
};
