import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { aboutText } from "../../Constants";

import CounterCard from "./CounterCard";

function WelcomeCard(){
    return  <Container  className='highlighted-card' id='AboutDiv'>
    <Row>
      <Col className='aboutImg'></Col>
      <Col>
          <div className="card-text">
          <h3 className="SecColour"> Welcome to Dr. Oommens</h3>
              <h1 className="PrimaryColour fw700">Best Care for Your Eye Health</h1>
              <p className='font1s'>
              {aboutText}
              </p>
              <Row>
              <Col className='counter-card'>
               <CounterCard />
               </Col>
               <Col className='counter-card'>
               <CounterCard />
               </Col>
              </Row>
              <Row>
              <Col className='counter-card'>
               <CounterCard />
               </Col>
               <Col className='counter-card'>
               <CounterCard />
               </Col>
              </Row>
          </div>
      </Col>
    </Row>
  </Container>
}

export default WelcomeCard;