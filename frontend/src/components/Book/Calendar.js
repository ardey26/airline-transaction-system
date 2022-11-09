import React from "react";
import { MdDateRange } from "react-icons/md";
import DatePicker from "react-datepicker";

const Calendar = ({ handleDepartureChange, handleArrivalChange, data }) => {
  if (data.itinerary_type === "ROUND_TRIP") {
    return (
      <>
        <div class="col-md-3">
          <MdDateRange size={20} /> DEPARTURE DATE:
          <DatePicker
            withPortal
            minDate={new Date()}
            selected={Date.parse(data.departure)}
            onChange={(date) => handleDepartureChange(date)}
          />
        </div>

        <div class="col-md-3">
          <MdDateRange size={20} /> RETURN DATE:
          <DatePicker
            withPortal
            minDate={Date.parse(data.departure)}
            selected={Date.parse(data.arrival)}
            onChange={(date) => handleArrivalChange(date)}
          />
        </div>
      </>
    );
  }
  return (
    <div class="col-md-6">
      <MdDateRange size={20} /> DEPARTURE DATE:
      <DatePicker
        withPortal
        minDate={new Date()}
        selected={Date.parse(data.departure)}
        onChange={(date) => handleDepartureChange(date)}
      />
    </div>
  );
};

export default Calendar;
