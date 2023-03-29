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
            <li><a href="https://wa.me/918281166690" target="blank"><i class="fab fa-brands fa-whatsapp"></i></a></li>
            <li><a href="https://www.instagram.com/imsanketbodke/" target="blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/sanket-bodake-995b5b205/" target="blank"><i class="fab fa-brands fa-facebook-f"></i></a></li>
            <li><a href="https://codepen.io/sanketbodke"><i class="fab fa-brands fa-youtube"></i></a></li>
        </ul>
    </div>
    </Col>
</Row>
    </Container>
}