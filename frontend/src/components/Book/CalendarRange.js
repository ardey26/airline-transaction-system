import React, { useState, useEffect } from "react";
import { MdDateRange } from "react-icons/md";
import DatePicker from "react-datepicker";

const CalendarRange = ({ handleDepartureChange, handleArrivalChange }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [beginDate, endDate] = dateRange;

  useEffect(() => {
    handleDepartureChange(beginDate);
    handleArrivalChange(endDate);
  }, [endDate]);

  return (
    <div class="col-md-6">
      TRAVEL DATES: <MdDateRange size={20} />{" "}
      <DatePicker
        selectsRange={true}
        startDate={beginDate}
        endDate={endDate}
        withPortal
        minDate={new Date()}
        onChange={(date) => setDateRange(date)}
      />
    </div>
  );
};

export default CalendarRange;
