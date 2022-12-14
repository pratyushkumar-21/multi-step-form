import React, { memo } from "react";
import Error from "./Error";

const CustomCheckBox = ({ error, label, name, ...rest }) => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={name}
        name={name}
        {...rest}
      />

      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>

      {error && <Error error={error} />}
    </div>
  );
};

export default memo(CustomCheckBox);
