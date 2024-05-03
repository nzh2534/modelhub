import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Loading from "./Loading";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { faBullseye, faPeopleGroup, faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Template({ projects }) {
  const {id} = useParams();
  const [formData, updateFormData] = useState({});
  const [prediction, updatePrediction] = useState({"Submit Values to Recieve Model Output": ""});
  const [loading, updateLoading] = useState(false);

  useEffect(() => {
    const initialFormData = {};
    for (const [key, values] of Object.entries(projects[id].input)) {
      initialFormData[key] = values[0];
    }
    updateFormData(initialFormData);
   }, [projects[id].input]);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: parseFloat(e.target.value.trim()),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mlarray = Object.values(formData)
    updateLoading(true);
    axios.post(projects[id].link, {mlarray: mlarray})
    .then((response) => {
        console.log(response);
        updatePrediction(response.data);
        updateLoading(false);
    })
    .catch((error) => {
        console.error(error);
        updateLoading(false);
    });
  };

  return (
    <Form
      style={{
        marginRight: "100px",
        marginLeft: "100px",
        marginTop: "5vh",
      }}
    >
      <Row className="d-flex align-items-center justify-content-center">
        <Col
          sm={6}
          style={{
            maxWidth: "50vw",
            maxHeight: "75vh",
            overflow: "hidden",
            overflowY: "scroll",
            backgroundColor: "hsl(1,0%,90%)",
            padding: "20px",
            borderRadius: "7px",
            margin: "10px",
            zoom: "75%"
          }}
        >
          <Form.Label style={{ fontSize: "20px", textAlign: 'center' }}>
            Input
          </Form.Label>
          <hr />
          {Object.entries(projects[id].input).map(([key, values], index) => (
                <Form.Group key={key} className="mb-3 form-group">
                <Form.Label>{key}</Form.Label>
                <Form.Select
                    type="select"
                    label={key}
                    name={key}
                    onChange={handleChange}
                >
                    {values.map(value => (
                    <option key={value} value={value}>{value}</option>
                    ))}
                </Form.Select>
                </Form.Group>
            ))}
            <Button variant="secondary" type="submit" style={{fontStyle: "bold", width: "100%"}} onClick={handleSubmit}>
                Submit
            </Button>
        </Col>
        <Col sm={6}
            style={{
                maxWidth: "50vw",
                maxHeight: "75vh",
                backgroundColor: "hsl(1,0%,90%)",
                padding: "20px",
                borderRadius: "7px",
                margin: "10px",
                zoom: "75%"
            }}
            >
                <div style={{backgroundColor: "#38517B", borderRadius: "15px", padding: "1vw", color: "white", fontFamily: "Space Mono"}}>
                    <div className="d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon style={{margin: "1vw"}}className="icon" size="2xl" icon={faPeopleGroup} color="white"/>
                        Training Size 
                        <Alert style={{marginTop: "2vh", marginLeft:"1vw"}}>{projects[id].size}</Alert>
                        <FontAwesomeIcon style={{margin: "1vw"}}className="icon" size="2xl" icon={faBullseye} color="white"/>
                        Accuracy 
                        <Alert style={{marginTop: "2vh", marginLeft:"1vw"}}>{projects[id].accuracy}</Alert>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon style={{margin: "1vw"}}className="icon" size="2xl" icon={faRobot} color="white"/>
                        Machine Learning Algorithmn 
                        <Alert style={{marginTop: "2vh", marginLeft:"1vw"}}>{projects[id].type}</Alert>
                        {/* <FontAwesomeIcon style={{margin: "1vw"}}className="icon" size="2xl" icon={faPeopleGroup} color="white"/>
                        Training Size 
                        <Alert style={{marginTop: "2vh", marginLeft:"1vw"}}>10</Alert> */}
                    </div>
                </div>
                <div style={{backgroundColor: "white", minHeight: "10vh", borderRadius: "15px", padding: "1vw"}}>
                    {loading ? <Loading /> : <>
                        {Object.keys(prediction).map(key => (
                            <div key={key}>
                                <strong style={{fontStyle: "italic"}}>{key}:</strong> {prediction[key]}
                            </div>
                        ))}</>
                    }
                </div>
            
            
            </Col>
      </Row>
    </Form>
  );
}

export default Template;

