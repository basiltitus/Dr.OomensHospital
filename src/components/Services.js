import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceItem from "./ServiceItem";
import './Services.css'

export default function Services(){
    return(
        <Row className='services'>
        <Col><ServiceItem icon='fa fa-solid fa-heart-circle-check' title='Cataract And Refractive Lens Surgery' caption='some weird contents go over her. Please change it as soon as possible' /></Col>
        <Col><ServiceItem icon='fa fa-solid fa-heart-circle-minus' title='Cataract And Refractive Lens Surgery' caption='some weird contents go over her. Please change it as soon as possible' /></Col>
        <Col><ServiceItem icon='fa fa-solid fa-heart-circle-bolt' title='Cataract And Refractive Lens Surgery'  caption='some weird contents go over her. Please change it as soon as possible'  /></Col>
        <Col><ServiceItem icon='fa fa-solid fa-heart-circle-exclamation' title='Cataract And Refractive Lens Surgery' caption='some weird contents go over her. Please change it as soon as possible' /></Col>
        </Row>
    )
}