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
    handleInputChange,
  } = useContext(InsuranceFormContext);

  return (
    <div>
      <div>
        <FormHeader
          header="Choose your plan"
          subHeader="Hello Anisha, Increase yours and your family's insurence cover by Rs 20 lakhs with Super top-up"
        />
      </div>
      <div>
        <Container>
          <Row style={{ marginBottom: "24px" }}>
            <Card style={{ width: "736px" }}>
              <Card.Header>
                <b>Basic details</b> (required)
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <CustomSelectBox
                      options={planList}
                      label="Personal email address"
                      name="plan"
                      placeholder="Select your plan"
                      value={plan}
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>

          <Row>
            <Card style={{ width: "736px" }}>
              <Card.Header>
                <b>Basic details</b> (required)
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <CustomInputBox
                      type="email"
                      label="Personal email address"
                      name="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={handleInputChange}
                    />
                  </Col>
                  <Col>
                    <CustomInputBox
                      label="Mobile Number"
                      name="number"
                      placeholder="Enter Number"
                      value={number}
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <CustomInputBox
                      label="Address line 01"
                      name="address1"
                      placeholder="Enter address line 01"
                      value={address1}
                      onChange={handleInputChange}
                    />
                  </Col>
                  <Col>
                    <CustomInputBox
                      label="Address line 02"
                      name="address2"
                      placeholder="Enter address line 02"
                      value={address2}
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <CustomInputBox
                      label="Pincode"
                      name="pincode"
                      placeholder="Enter pincode"
                      value={pincode}
                      onChange={handleInputChange}
                    />
                  </Col>
                  <Col>
                    <CustomInputBox
                      label="State"
                      name="state"
                      placeholder="Enter state"
                      value={state}
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PlanForm;
