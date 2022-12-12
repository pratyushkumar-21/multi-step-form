import React from "react";
import SelecetedPlanDetails from "./SelectedPlanDetails";
import FormHeader from "./FormHeader";

const CongratulationPage = (props) => {
  return (
    <div>
      <div>
        <FormHeader header="Congratulations!" />
      </div>
      <SelecetedPlanDetails />
    </div>
  );
};

export default CongratulationPage;
