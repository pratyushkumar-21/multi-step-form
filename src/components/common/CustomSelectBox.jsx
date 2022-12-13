import React from "react";
import Error from "./Error";

const CustomSelectBox = ({
  label,
  name,
  options,
  error,
  placeholder,
  ...rest
}) => {
  return (
    <div className="form-group">
      <label htmlFor="{name}">{label}</label>

      <select className="form-control" id={name} {...rest} name={name}>
        <option value="">{placeholder}</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {error && <Error error={error} />}
    </div>
  );
};

export default CustomSelectBox;
