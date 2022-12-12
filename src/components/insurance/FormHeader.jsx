import React from "react";

const FormHeader = (props) => {
  const { header, subHeader } = props;
  return (
    <div className="form-header">
      <h1>{header}</h1>
      <p>{subHeader}</p>
    </div>
  );
};

export default FormHeader;
