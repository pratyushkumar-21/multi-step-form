import React, { useContext, memo } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import InsuranceFormContext from "../../context/insuranceFormContext";

const FormPreview = (props) => {
  const {
    formData: { email, number, address1, address2, pincode, state },
  } = useContext(InsuranceFormContext);

  return (
    <FormPreviewMemo
      email={email}
      number={number}
      address1={address1}
      address2={address2}
      pincode={pincode}
      state={state}
    />
  );
};

const FormPreviewMemo = memo((props) => {
  const { email, number, address1, address2, pincode, state } = props;

  const formPreviewList = [
    {
      label: "Personal email address:",
      value: email,
    },
    {
      label: "Mobile number:",
      value: number,
    },
    {
      label: "Address Line 01:",
      value: address1,
    },
    {
      label: "Address Line 02:",
      value: address2,
    },
    {
      label: "Pincode",
      value: pincode,
    },
    {
      label: "State",
      value: state,
    },
  ];

  const renderFormPreviewData = () => {
    return formPreviewList.map((data, index) => (
      <Row key={index} className="mb-2">
        <Col>{data.label}</Col>
        <Col>
          <strong>{data.value}</strong>
        </Col>
      </Row>
    ));
  };

  return (
    <Card style={{ width: "352px" }}>
      <Card.Header>Form preview</Card.Header>
      <Card.Body>{renderFormPreviewData()}</Card.Body>
    </Card>
  );
});

export default FormPreview;
