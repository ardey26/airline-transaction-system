import React from "react";

export const Destination = ({ handleDestinationChange, countries, data }) => {
  return (
    <div class="col-md-6 step-7">
      <label for="inputState" class="form-label">
        TO
      </label>
      <select
        id="inputState"
        class="form-select form-control-lg"
        onChange={handleDestinationChange}
      >
        <option selected disabled>
          Choose...
        </option>
        {countries.map((country) => (
          <option
            value={country.value}
            disabled={country.value === data.origin}
          >
            {country.label}
          </option>
        ))}
      </select>
    </div>
  );
};
