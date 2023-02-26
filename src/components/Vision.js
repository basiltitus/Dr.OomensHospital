import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { visionText } from "../Constants";

function Vision(){
    return  <Container fluid>
    <Row>
      <Col className='aboutImg'>
      </Col>
      <Col>
          <div className="blockText">
              <h3 className="PrimaryColour fw700">Our Vision</h3>
              <p className='fontS1'>
              {visionText}
              </p>
              <hr/>
              <p className='fontS3'>
                  {visionText}
              </p>
          </div>
      </Col>
    </Row>
  </Container>
}

export default Vision;