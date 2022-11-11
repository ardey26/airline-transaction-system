import React from "react";

export const Origin = ({ handleOriginChange, countries }) => {
  return (
    <div class="col-md-6 step-6">
      <label for="inputState" class="form-label">
        FROM
      </label>
      <select
        id="inputState"
        class="form-select form-control-lg"
        onChange={handleOriginChange}
      >
        <option selected disabled>
          Choose...
        </option>
        {countries.map((country) => (
          <option value={country.value}> {country.label} </option>
        ))}
      </select>
    </div>
  );
};
