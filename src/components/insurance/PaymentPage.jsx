import React, { useContext } from "react";
import FormHeader from "./FormHeader";
import InsuranceFormContext from "../../context/insuranceFormContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BackArrow from "../common/BackArrow";
import SelecetedPlanDetails from "./SelectedPlanDetails";

const PaymentPage = () => {
  const { handleBack } = useContext(InsuranceFormContext);

  return (
    <div>
      <Row>
        <Col>
          <BackArrow onClick={handleBack} />
        </Col>

        <Col md={10}>
          <FormHeader header="Review and confirm payment" />
        </Col>
      </Row>

      <SelecetedPlanDetails />
    </div>
  );
};

export default PaymentPage;
