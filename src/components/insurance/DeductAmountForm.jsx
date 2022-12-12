import React, { useContext } from "react";
import FormHeader from "./FormHeader";
import InsuranceFormContext from "../../context/insuranceFormContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import BackArrow from "../common/BackArrow";
import CustomCheckBox from "../common/CustomCheckBox";

const DeductAmountForm = (props) => {
  const {
    formData: { deductibleAmount, plan, deductAmountCheckbox },
    handleInputChange,
    handleBack,
    handleCheckBoxChange,
  } = useContext(InsuranceFormContext);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <BackArrow onClick={handleBack} />
          </Col>
          <Col md={10}>
            <FormHeader
              header="Select your deductible amount"
              subHeader="Select the deductible amount for the policy (or ploicies) below. (what is deductible)"
            />
          </Col>
        </Row>

        <Row style={{ marginBottom: "24px" }}>
          <Col>
            <Card style={{ width: "736px" }}>
              <Card.Header>
                <b>{plan}</b>
              </Card.Header>
              <Card.Body>
                <p>
                  Sum insured of Rs 20,00,000 with a deductible of Rs 3,00,000
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <CustomCheckBox
              type="checkbox"
              label="I understand that this insurance will not be utilized until ₹3,00,000 (deductible) is exhausted."
              name="deductAmountCheckbox"
              checked={deductAmountCheckbox}
              onChange={handleCheckBoxChange}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DeductAmountForm;
