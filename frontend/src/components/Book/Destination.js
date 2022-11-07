import React from "react";

export const Destination = ({ handleDestinationChange, countries }) => {
  return (
    <div class="col-md-6">
      <label for="inputState" class="form-label">
        TO
      </label>
      <select
        id="inputState"
        class="form-select form-control-lg"
        onChange={handleDestinationChange}
      >
        <option selected>Choose...</option>
        {countries.map((country) => (
          <option value={country.value}>{country.label}</option>
        ))}
      </select>
    </div>
  );
};
