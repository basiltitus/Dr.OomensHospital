import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { doctor1Caption, doctor1Img, doctor1Name,doctor2Caption, doctor2Img, doctor2Name, doctorDivCaption } from "../Constants";
import DoctorCard from "./DoctorCard";

export default function DoctorDiv(){
    return(
        <Container>
        <h3 className="PrimaryColour fw700">Specialized Doctors</h3>
        <p>{doctorDivCaption}</p>
        <Row >
            <Col style={{marginLeft:'3rem'}}>
                <DoctorCard doctorImg={doctor1Img} doctorName={doctor1Name} doctorCaption={doctor1Caption}/>
            </Col>
            <Col>
            <DoctorCard doctorImg={doctor2Img} doctorName={doctor2Name} doctorCaption={doctor2Caption}/>
            </Col>
        </Row>
        <br/>
        <br/>
        </Container>
    );
}
