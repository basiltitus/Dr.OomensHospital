import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  doctor1Caption,
  doctor1Img,
  doctor1Name,
  doctor2Caption,
  doctor2Img,
  doctor2Name,
  doctorDivCaption,
} from "../Constants";
import DoctorCard from "./DoctorCard";
import './Doct.css'

export default function DoctorDiv() {
  return (    <Container fluid className='doctorDiv'>
  <h1 className="fw800 PrimaryColour">Meet Our Team</h1>
  <h2 className="hw700 SecColour">We Devote Ourselves for you</h2>
  <Row>
    <Col>
          <DoctorCard
            doctorImg={doctor1Img}
            doctorName={doctor1Name}
            doctorCaption={doctor1Caption}
          />
</Col>
        <Col className="doctorDiv">
          <DoctorCard
            doctorImg={doctor2Img}
            doctorName={doctor2Name}
            doctorCaption={doctor2Caption}
          />
        </Col>
      </Row>
      <br />
      <br />
      </Container>
  );
}
