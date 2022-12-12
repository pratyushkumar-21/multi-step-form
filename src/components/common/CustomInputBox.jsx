import React from "react";

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
      <small id={name} className="form-text text-muted">
        <p className="text-danger">{error}</p>
      </small>
    </div>
  );
};

export default CustomInputBox;
