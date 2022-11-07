import React from "react";
import { MdDateRange } from "react-icons/md";
import DatePicker from "react-datepicker";

const Calendar = ({ handleDepartureChange, data }) => {
  return (
    <div class="col-md-6">
      TRAVEL DATE: <MdDateRange size={20} />{" "}
      <DatePicker
        withPortal
        minDate={new Date()}
        onChange={(date) => handleDepartureChange(date)}
      />
    </div>
  );
};

export default Calendar;
