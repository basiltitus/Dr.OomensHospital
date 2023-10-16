import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { mobileBG, visionImgUrl, visionText } from "../../Constants";
import './Vision.css'
function Vision(){
    return  <Container fluid id='vision-container'>
    <img className='desktop-view' src={visionImgUrl} />
    <img className='mobile-view' src={mobileBG} />
    <div className="content">
    <span className="icon">
    <i class="fa-solid fa-quote-right"></i>
    </span>
    <p><b>Our Vision</b>{visionText}</p>
    <hr/>
    <p>
      Dr.Oommen Varghese
    </p>
    </div>
  </Container>
}

export default Vision;