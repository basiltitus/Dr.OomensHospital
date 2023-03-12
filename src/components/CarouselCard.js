import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import ServiceItem from "./ServiceItem";
import { Container } from "react-bootstrap";
import { visionImgUrl } from "../Constants";
import './CarouselCard.css'

export default class CarouselCard extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "28rem",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "30rem",
      width: "25rem",
      paddingTop: "80px",
      textAlign: "center",
      background: "#E8DBFC",
      color: "black",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
  <Container fluid id='carousel-card'>
    <img src={visionImgUrl} />
    <div className="content">
    <h1>Our Services</h1>
    <h5>For better picture</h5>
    <hr></hr>
      <div style={CarouselCard.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          <div style={CarouselCard.CARD_STYLE}>dasd</div>
          <div style={CarouselCard.CARD_STYLE}>Second Card</div>
          <div style={CarouselCard.CARD_STYLE}>Third Card</div>
          <div style={CarouselCard.CARD_STYLE}>Fourth Card</div>
          <div style={CarouselCard.CARD_STYLE}>Fifth Card</div>
        </ReactCardCarousel>
      </div>
</div>
  </Container>
  );
  }
}

