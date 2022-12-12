import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import InsuranceFormContext from "../../context/insuranceFormContext";

const FormPreview = (props) => {
  const {
    formData: { email, number, address1, address2, pincode, state },
  } = useContext(InsuranceFormContext);

  return (
    <div>
      <Card style={{ width: "352px" }}>
        <Card.Header>Form preview</Card.Header>
        <Card.Body>
          <Container>
            <Row>Personal email address: {email}</Row>
            <Row>Mobile number: {number}</Row>
            <Row>Address Line 01: {address1}</Row>
            <Row>Address Line 02: {address2} </Row>
            <Row>Pincode: {pincode}</Row>
            <Row>State: {state}</Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FormPreview;
