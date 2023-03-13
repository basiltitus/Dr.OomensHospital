import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import ServiceItem from "./ServiceItem";
import { Container } from "react-bootstrap";
import { visionImgUrl } from "../Constants";
import './CarouselCard.css'

export default class CarouselCard extends Component {


  render() {
    return (
  <Container fluid id='carousel-card'>
    <img src={visionImgUrl} />
    <div className="content">
    <h1>Our Services</h1>
    <h5>For better picture</h5>
    <hr></hr>
      <div className='container-style'>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          <div>dasd</div>
          <div className='card-style'>Second Card</div>
          <div className='card-style'>Third Card</div>
          <div className='card-style'>Fourth Card</div>
          <div className='card-style'>Fifth Card</div>
        </ReactCardCarousel>
      </div>
</div>
  </Container>
  );
  }
}

