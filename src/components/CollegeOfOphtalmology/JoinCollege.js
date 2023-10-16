import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./JoinCollege.css";
import DownloadButton from "./DownloadButton";

export default function JoinCollege() {
  return (
    <Container fluid id="college-home-div">
      <div className="content">
        <h1>Join Our Prestigious Institution</h1>
        <p>
          We have highly qualified doctors who are expert practitioners in their
          specialised fields.!Our hospital is well-equipped with
          state-of-the-art surgical and diagnostic equipment, sterile operation
          theaters and total productivity systems with emphasis on patient
          satisfaction.
        </p>
      </div>
      <Row className="left-inverted">
        <Col md={4}>
          <DownloadButton title="Prospectus" />
          <br />
        </Col>
        <Col md={4}>
          <DownloadButton title="Application" />
        </Col>
      </Row>
    </Container>
  );
}
