import React, { useState, useCallback } from "react";
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
import {
  planFormSchema,
  declarationFormSchema,
  deductAmountFormSchema,
} from "../../validations/insuranceFormValidationSchema";

const InsuranceForm = (props) => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    email: "test@gmail.com",
    number: "9876543210",
    address1: "aecs layout",
    address2: "bangalore",
    pincode: "560076",
    state: "karnataka",
    plan: "",
    deductibleAmount: 2_00_000,
    deductAmountCheckbox: true,
    decCheckBox1: true,
    decCheckBox2: true,
    decCheckBox3: true,
    decCheckBox4: true,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = useCallback((event) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleCheckBoxChange = useCallback((event) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.checked,
    }));
  }, []);

  const handleBack = useCallback((e) => {
    setStep((step) => step - 1);
  }, []);

  const validateForm = (formTypeSchema) => {
    return formTypeSchema
      .validate(formData, { abortEarly: false })
      .then((valid) => {
        setErrors({});
        return true;
      })
      .catch((err) => {
        const errorsData = {};

        err.errors.forEach((error, index) => {
          errorsData[err.inner[index].path] = error;
        });

        setErrors(errorsData);
        return false;
      });
  };

  const handleNext = async (e) => {
    let isValid = false;
    switch (step) {
      case 1:
        isValid = await validateForm(planFormSchema);
        break;
      case 2:
        isValid = await validateForm(deductAmountFormSchema);
        break;
      case 3:
        isValid = await validateForm(declarationFormSchema);
        break;
      case 4:
        isValid = true;
        break;
    }

    if (isValid) setStep((step) => step + 1);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return <PlanForm />;
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

  return (
    <InsuranceFormContext.Provider
      value={{
        formData,
        handleInputChange,
        handleBack,
        handleCheckBoxChange,
        errors,
      }}
    >
      <Row>
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
    </InsuranceFormContext.Provider>
  );
};

export default InsuranceForm;
