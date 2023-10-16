import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { aboutText } from "../../Constants";

import CounterCard from "./CounterCard";

function WelcomeCard() {
  return (
    <Container className="highlighted-card" id="AboutDiv">
      <Row>
        <Col className="aboutImg"></Col>
        <Col>
          <div className="card-text">
            <h3 className="SecColour"> Welcome to Dr. Oommens</h3>
            <h1 className="PrimaryColour fw700">
              Best Care for Your Eye Health
            </h1>
            <p className="font1s">{aboutText}</p>
            <Row>
              <Col className="counter-card">
                <CounterCard title='Patients treated' count='4000'/>
              </Col>
              <Col className="counter-card">
              <CounterCard title='Surgeries' count='3500'/>
              </Col>
            </Row>
            <Row>
              <Col className="counter-card">
              <CounterCard title='Better vision' count='5000'/>
              </Col>
              <Col className="counter-card">
              <CounterCard title='Happy smiles' count='5000'/>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default WelcomeCard;
