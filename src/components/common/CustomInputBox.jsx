import React, { memo } from "react";
import Error from "./Error";

const CustomInputBox = ({ type = "text", name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <input
        {...rest}
        name={name}
        id={name}
        className="form-control"
        type={type}
      />

      {error && <Error error={error} />}
    </div>
  );
};

export default memo(CustomInputBox);
