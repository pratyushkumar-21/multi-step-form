import React, { useContext } from "react";
import FormHeader from "./FormHeader";
import InsuranceFormContext from "../../context/insuranceFormContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import BackArrow from "../common/BackArrow";
import CustomCheckBox from "../common/CustomCheckBox";
import CustomRangeSlider from "../common/CustomRangeSlider";

const DeductAmountForm = (props) => {
  const {
    formData: { deductibleAmount, plan, deductAmountCheckbox },
    errors,
    handleInputChange,
    handleBack,
    handleCheckBoxChange,
  } = useContext(InsuranceFormContext);

  return (
    <Container>
      <Row>
        <Col md={2}>
          <BackArrow onClick={handleBack} />
        </Col>

        <Col md={10}>
          <FormHeader
            header="Select your deductible amount"
            subHeader="Select the deductible amount for the policy (or ploicies) below. (what is deductible)"
          />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card style={{ width: "736px" }}>
            <Card.Header>
              <b>{plan}</b>
            </Card.Header>
            <Card.Body>
              <p>
                Sum insured of ₹20,00,000 with a deductible of{" "}
                <strong>₹{deductibleAmount}</strong>
              </p>

              <CustomRangeSlider
                error={errors["deductibleAmount"]}
                min={1_00_000}
                max={5_00_000}
                value={deductibleAmount}
                step={10_000}
                rangeSymbol="₹"
                name="deductibleAmount"
                onChange={handleInputChange}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <CustomCheckBox
            error={errors["deductAmountCheckbox"]}
            type="checkbox"
            label={`I understand that this insurance will not be utilized until ₹${deductibleAmount}(deductible) is exhausted.`}
            name="deductAmountCheckbox"
            checked={deductAmountCheckbox}
            onChange={handleCheckBoxChange}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default DeductAmountForm;
