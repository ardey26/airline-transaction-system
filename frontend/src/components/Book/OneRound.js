import React from "react";

export const OneRound = ({ toggle, setToggle }) => {
  return (
    <>
      <div class="col-md-6">
        <input
          type="radio"
          class="btn-check"
          name="options-outlined"
          id="oneWay"
          checked={toggle.oneway}
        />
        <label
          class="btn btn-outline-primary btn-block btn-lg"
          for="success-outlined"
          onClick={() => setToggle({ oneway: true, roundtrip: false })}
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
          checked={toggle.roundtrip}
        />
        <label
          class="btn btn-outline-primary btn-block btn-lg"
          for="danger-outlined"
          onClick={() => setToggle({ oneway: false, roundtrip: true })}
        >
          ROUND TRIP
        </label>
      </div>
    </>
  );
};
