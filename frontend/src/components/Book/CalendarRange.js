import React, { useState, useEffect } from "react";
import { MdDateRange } from "react-icons/md";
import DatePicker from "react-datepicker";

const CalendarRange = ({ setData, data }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [beginDate, endDate] = dateRange;

  useEffect(() => {
    setData({ arrival: endDate, departure: beginDate });
  }, [dateRange]);

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
