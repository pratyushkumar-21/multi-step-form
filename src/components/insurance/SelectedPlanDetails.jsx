import React, { useContext } from "react";
import InsuranceFormContext from "../../context/insuranceFormContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const SelecetedPlanDetails = () => {
  const {
    formData: { email, number, plan, address1, address2, pincode, state },
  } = useContext(InsuranceFormContext);

  const bodyData = [
    { label: "Plan Selected", value: plan },
    { label: "Mobile Number", value: number },
    { label: "Address line 01", value: address1 },
    { label: "Address line 02", value: address2 },
    { label: "pincode", value: pincode },
    { label: "state", value: state },
  ];

  const renderBodyData = () => {
    return bodyData.map((data, index) => (
      <Row key={index} className="mb-3">
        <Col>{data.label}</Col>
        <Col>
          <strong>{data.value}</strong>
        </Col>
      </Row>
    ));
  };

  return (
    <Container>
      <Row>
        <Card style={{ width: "928px" }}>
          <Card.Body>{renderBodyData()}</Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default SelecetedPlanDetails;
