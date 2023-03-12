import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer(){
    return <Container fluid id='footer'>
<hr/>
<Row >
    <Col>

<p  className='text-left fontS3'>&copy;Devoloped with love 2023</p>
    </Col>
    <Col className='text-right fontS1'>
        Follow us : 
        <i class="fa-brands fa-facebook-f circleLogo"></i>
        
        &nbsp;
        <i class="fa-brands fa-twitter circleLogo"></i>
        &nbsp;
        <i class="fa-brands fa-instagram circleLogo"></i>
        &nbsp;
        <i class="fa-regular fa-envelope circleLogo"></i>
    </Col>
</Row>
    </Container>
}