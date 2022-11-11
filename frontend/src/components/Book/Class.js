import React from "react";

export const Class = ({ handleClassChange, classes }) => {
  return (
    <div class="col-md-6 step-8">
      <label for="inputState" class="form-label">
        CLASS
      </label>
      <select
        id="inputState"
        class="form-select form-control-lg"
        onChange={handleClassChange}
      >
        <option selected disabled>
          Choose...
        </option>
        {classes.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};
