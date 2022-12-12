import React from "react";
import CustomButton from "../common/CustomButton";

const FormFooter = ({ buttonLabel = "next", onClick }) => {
  return (
    <div className="form-footer">
      <div className="footer-button-wrapper">
        <CustomButton onClick={onClick} label={buttonLabel} />
      </div>
    </div>
  );
};

export default FormFooter;
