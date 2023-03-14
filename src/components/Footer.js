import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Footer.css'

export default function Footer(){
    return <Container fluid id='footer'>
<hr/>
<Row >
    <Col>

<p  className='text-left fontS3'>&copy;Devoloped with love 2023</p>
    </Col>
    <Col className='text-right fontS1'>
        {/* Follow us : 
        <i class="fa-brands fa-facebook-f circleLogo"></i>
        
        &nbsp;
        <i class="fa-brands fa-twitter circleLogo"></i>
        &nbsp;
        <i class="fa-brands fa-instagram circleLogo"></i>
        &nbsp;
        <i class="fa-regular fa-envelope circleLogo"></i> */}
        <div class="social-menu">
        <ul>
            <li><a href="https://github.com/sanketbodke" target="blank"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.instagram.com/imsanketbodke/" target="blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/sanket-bodake-995b5b205/" target="blank"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://codepen.io/sanketbodke"><i class="fab fa-codepen" target="blank"></i></a></li>
        </ul>
    </div>
    </Col>
</Row>
    </Container>
}