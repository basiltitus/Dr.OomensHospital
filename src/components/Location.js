import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { locationCaption } from "../Constants";

export default function Location() {
  return (
    <Container id="location-cont">
      <h1 className="PrimaryColour fw700">Contact Us</h1>

      <h5 className="PrimaryColour">Stay in touch</h5>
      <Row>
        <Col style={{ padding: "0px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.139964778952!2d76.61355711427807!3d9.320864086916973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622e85096c1ad%3A0x8591a1704992b577!2sDr.Oommen&#39;s%20Eye%20Hospital%20%26%20Micro%20Surgery%20Centre!5e0!3m2!1sen!2sin!4v1677433667944!5m2!1sen!2sin"
            className="locationIframe"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
        <Col className='contact-content'>Call : (0484) 263 0466<br/>Email: abcac@gmail.com<br/>Address: Thamarasseril Building, Temple Road, Chengannur, Kerala 689121<br/>
        </Col>
      </Row>
    </Container>
  );
}
