import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import { Book } from "./pages/Book";
import Dashboard from "./pages/Dashboard";
import Flights from "./pages/Flights";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [response, setResponse] = useState({
    itinerary_type: "ONE_WAY",
    destination: "",
    origin: "",
    class: "Economy",
    num: 0,
    departure: "",
    arrival: "",
  });

  const getData = (data) => {
    setResponse(data);
    console.log(response);
  };

  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/book"
              element={<Book getData={getData} response={response} />}
            />
            <Route path="/flights" element={<Flights response={response} />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
