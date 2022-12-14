import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CustomInputBox from "../common/CustomInputBox";
import InsuranceFormContext from "../../context/insuranceFormContext";
import FormHeader from "./FormHeader";
import CustomSelectBox from "../common/CustomSelectBox";

const PlanForm = ({ planList }) => {
  const {
    formData: { email, number, address1, address2, pincode, state, plan },
    errors,
    handleInputChange,
  } = useContext(InsuranceFormContext);

  let inputBoxes = [
    {
      type: "email",
      label: "Personal email address",
      name: "email",
      placeholder: "Enter email",
      value: email,
    },
    {
      label: "Mobile Number",
      name: "number",
      placeholder: "Enter Number",
      value: number,
    },
    {
      label: "Address line 01",
      name: "address1",
      placeholder: "Enter address line 01",
      value: address1,
    },
    {
      label: "Address line 02",
      name: "address2",
      placeholder: "Enter address line 02",
      value: address2,
    },
    {
      label: "Pincode",
      name: "pincode",
      placeholder: "Enter pincode",
      value: pincode,
    },
    {
      label: "State",
      name: "state",
      placeholder: "Enter state",
      value: state,
    },
  ];

  const renderInputBoxes = () => {
    return inputBoxes.map((inputBox, index) => (
      <Col key={index} md={6}>
        <CustomInputBox
          error={errors[inputBox.name]}
          type={inputBox.type ? inputBox.type : "text"}
          label={inputBox.label}
          name={inputBox.name}
          placeholder={inputBox.placeholder}
          value={inputBox.value}
          onChange={handleInputChange}
        />
      </Col>
    ));
  };

  return (
    <div>
      <Row>
        <FormHeader
          header="Choose your plan"
          subHeader="Hello Anisha, Increase yours and your family's insurence cover by ₹20 lakhs with Super top-up"
        />
      </Row>

      <Container>
        <Row className="mb-4">
          <Card style={{ width: "736px" }}>
            <Card.Header>
              <strong>Plan details</strong>
            </Card.Header>
            <Card.Body>
              <CustomSelectBox
                error={errors["plan"]}
                options={planList}
                label="Your plan type"
                name="plan"
                placeholder="Select your plan"
                value={plan}
                onChange={handleInputChange}
              />
            </Card.Body>
          </Card>
        </Row>

        <Row>
          <Card style={{ width: "736px" }}>
            <Card.Header>
              <strong>Basic details</strong> (required)
            </Card.Header>
            <Card.Body>
              <Row>{renderInputBoxes()}</Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default PlanForm;
