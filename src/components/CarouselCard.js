import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import ServiceItem from "./ServiceItem";
import { Button, Card, Container } from "react-bootstrap";
import { visionImgUrl } from "../Constants";
import "./CarouselCard.css";
import CarouselObj from "./CarouselObj";

export default class CarouselCard extends Component {
  render() {
    return (
      <Container fluid id="carousel-card">
        <img src={visionImgUrl} />
        <div className="content">
          <h1>Our Services</h1>
          <h5>For better picture</h5>
          <hr></hr>
          <div className="container-style">
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
            <div className="card-style"><CarouselObj imgurl="https://columbiaeyeclinic.com/wp-content/uploads/2019/11/tech-eye-4-scaled.jpg" title='Cateract Surgery' /></div>
            <div className="card-style"><CarouselObj imgurl="https://columbiaeyeclinic.com/wp-content/uploads/2019/11/tech-eye-4-scaled.jpg" title='Cateract Surgery' /></div>
              <div className="card-style"><CarouselObj imgurl="https://columbiaeyeclinic.com/wp-content/uploads/2019/11/tech-eye-4-scaled.jpg" title='Cateract Surgery' /></div>
              <div className="card-style"><CarouselObj imgurl="https://columbiaeyeclinic.com/wp-content/uploads/2019/11/tech-eye-4-scaled.jpg" title='Cateract Surgery' /></div>
            </ReactCardCarousel>
        </div>
        </div>
      </Container>
    );
  }
}
