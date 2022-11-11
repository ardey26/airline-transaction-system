import React from "react";

export const Passenger = ({ handleNumChange, num }) => {
  return (
    <div class="col-md-6 step-8 passenger-step">
      <label for="inputState" class="form-label">
        PASSENGER
      </label>
      <select
        id="inputState"
        class="form-select form-control-lg"
        onChange={handleNumChange}
      >
        <option selected disabled>
          Choose...
        </option>

        {num.map((i) => (
          <option value={i}> {i} </option>
        ))}
      </select>
    </div>
  );
};
