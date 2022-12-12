import React, { useContext } from "react";
import FormHeader from "./FormHeader";
import InsuranceFormContext from "../../context/insuranceFormContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BackArrow from "../common/BackArrow";
import CustomCheckBox from "../common/CustomCheckBox";

const DeclarationForm = (props) => {
  const {
    formData: { decCheckBox1, decCheckBox2, decCheckBox3, decCheckBox4 },
    handleBack,
    handleCheckBoxChange,
  } = useContext(InsuranceFormContext);

  const declarationsList = [
    {
      label:
        "I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs.",
      name: "decCheckBox1",
      isChecked: decCheckBox1,
    },
    {
      label:
        "I hereby declare that all proposed members are in good health and entirely free from any mental pf physical impairements or deformities, disease/condition.",
      name: "decCheckBox2",
      isChecked: decCheckBox2,
    },
    {
      label:
        "I have understood that there is 30 days waiting period for all diseases and 2 years on named ailments. (list of named ailements)",
      name: "decCheckBox3",
      isChecked: decCheckBox3,
    },
    {
      label:
        "I understand that this policy doesn't cover Pre-existing diseases.",
      name: "decCheckBox4",
      isChecked: decCheckBox4,
    },
  ];

  const renderDeclarations = () => {
    return declarationsList.map((data) => (
      <Row key={data.name}>
        <Col>
          <CustomCheckBox
            type="checkbox"
            label={data.label}
            name={data.name}
            checked={data.isChecked}
            onChange={handleCheckBoxChange}
          />
        </Col>
      </Row>
    ));
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <BackArrow onClick={handleBack} />
          </Col>
          <Col md={10}>
            <FormHeader header="Declaration" />
          </Col>
        </Row>

        {renderDeclarations()}
      </Container>
    </div>
  );
};

export default DeclarationForm;
