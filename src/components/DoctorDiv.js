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

export default function DoctorDiv() {
  return (
    <Container>
      <h1 className="PrimaryColour fw700">
        <i class="fa-solid fa-grip-lines"></i>&nbsp;&nbsp;&nbsp;Meet Our Team&nbsp;&nbsp;&nbsp;
        <i class="fa-solid fa-grip-lines"></i>
      </h1>
      <h2  className='SecColour fw700'>{doctorDivCaption}</h2>
      <Row>
        <Col className="doctorDiv">
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
