import React from "react";

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
        <option>{placeholder}</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <small id={name} className="form-text text-muted">
        <p className="text-danger">{error}</p>
      </small>
    </div>
  );
};

export default CustomSelectBox;
