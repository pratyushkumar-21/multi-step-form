import React, { useState } from "react";
import PlanForm from "./PlanForm";
import DeductAmountForm from "./DeductAmountForm";
import DeclarationForm from "./DeclarationForm";
import ProgressBar from "../common/ProgressBar";
import InsuranceFormContext from "../../context/insuranceFormContext";
import FormPreview from "./FormPreview";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FormFooter from "./FormFooter";
import PaymentPage from "./PaymentPage";
import CongratulationPage from "./CongratulationPage";

const InsuranceForm = (props) => {
  const [formData, setFormData] = useState({
    email: "prkusdi@gmail.com",
    number: "9304138832",
    address1: "Aecs layout",
    address2: "bangalore",
    pincode: "560076",
    state: "Karnataka",
    plan: "One (Individual)",
    deductibleAmount: 200_000,
    deductAmountCheckbox: false,
    decCheckBox1: false,
    decCheckBox2: false,
    decCheckBox3: false,
    decCheckBox4: false,
  });

  const [step, setStep] = useState(2);

  const planList = ["One (Individual)", "Pro (Individual)"];

  const renderForm = () => {
    switch (step) {
      case 1:
        return <PlanForm planList={planList} />;
      case 2:
        return <DeductAmountForm />;
      case 3:
        return <DeclarationForm />;
      case 4:
        return <PaymentPage />;
      case 5:
        return <CongratulationPage />;
    }
  };

  const handleInputChange = (event) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCheckBoxChange = (event) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.checked,
    }));
  };

  const handleNext = (e) => {
    setStep((step) => step + 1);
  };

  const handleBack = (e) => {
    setStep((step) => step - 1);
  };

  return (
    <InsuranceFormContext.Provider
      value={{ formData, handleInputChange, handleBack, handleCheckBoxChange }}
    >
      <div>
        <Row className="header">
          <ProgressBar numberOfBars={4} active={step} />
        </Row>
        <Container className="form-body">
          <Row>
            <Col>{renderForm()}</Col>
            {step < 4 ? (
              <Col>
                <FormPreview />
              </Col>
            ) : null}
          </Row>
        </Container>
        {step < 5 ? (
          <FormFooter
            onClick={handleNext}
            buttonLabel={step < 4 ? "next" : "submit"}
          />
        ) : null}
      </div>
    </InsuranceFormContext.Provider>
  );
};

export default InsuranceForm;
