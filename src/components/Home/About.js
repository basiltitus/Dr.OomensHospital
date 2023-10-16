import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { aboutText } from "../../Constants";

function About(){
    return  <Container  id='aboutDivss'>
    <Row>
      <Col>
          <div className="blockText">
              <h3 className="PrimaryColour fw700">About Us</h3>
              <p className='fontS1'>
              {aboutText}
              </p>
              <hr/>
              <p className='fontS3'>
                  {aboutText}
              </p>
          </div>
      </Col>
      <Col className='aboutImg'>
      </Col>
    </Row>
  </Container>
}

export default About;