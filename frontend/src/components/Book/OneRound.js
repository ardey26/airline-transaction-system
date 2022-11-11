import React from "react";

export const OneRound = ({
  toggle,
  setToggle,
  handleRoundTripChange,
  handleOneWayChange,
  data,
}) => {
  return (
    <>
      <div class="col-md-6">
        <input
          type="radio"
          class="btn-check"
          name="options-outlined"
          id="oneWay"
          checked={data.itinerary_type === "ONE_WAY"}
        />
        <label
          class="btn btn-outline-primary btn-block btn-lg step-4"
          for="success-outlined"
          onClick={handleOneWayChange}
        >
          ONE WAY
        </label>
      </div>
      <div class="col-md-6">
        <input
          type="radio"
          class="btn-check"
          name="options-outlined"
          id="oneWay"
          checked={data.itinerary_type === "ROUND_TRIP"}
        />
        <label
          class="btn btn-outline-primary btn-block btn-lg step-5"
          for="danger-outlined"
          onClick={handleRoundTripChange}
        >
          ROUND TRIP
        </label>
      </div>
    </>
  );
};
