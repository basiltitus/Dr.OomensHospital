import React from "react";
import { Col, Row } from "react-bootstrap";
import TopbarItem from "./TopbarItem";
import TopbarItemMobile from "./TopbarItemMobile";
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/logo.ico'
export default function Topbar() {
  return (
    <span>
      <Row
        style={{ textAlign: "left", backgroundColor: "#F6F2F2" }}
        className="desktop-view"
      >
        <Col md={5} sm={12} className="topbar-title PrimaryColour">
        <Navbar.Brand href="../">
            <img
              src={Logo}
              width="70"
              height="60"
              style={{padding:'0'}}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Col>
        <Col sm={true}>
          <TopbarItem
            icon="fa-solid fa-phone-volume"
            topText="Emergency"
            bottomText="(0479)245 3416"
          />
        </Col>
        <Col sm={true}>
          <TopbarItem
            icon="fa-regular fa-clock"
            topText="Working Hours"
            bottomText="09:00 AM-06:30 PM "
          />
        </Col>

        <Col sm={true}>
          <TopbarItem
            icon="fa-solid fa-location-dot"
            topText="Location"
            bottomText="Chengannur, Kerala"
          />
        </Col>
      </Row>
      <span className="mobile-view ">
        <div className="topbar-title PrimaryColour">
        <img
              src={Logo}
              width="35"
              height="30"
              style={{padding:'0'}}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        Dr. Oommens Eye Hospital</div>
        <Row>
          <Col className="text-center">
            <TopbarItemMobile
              icon="fa-solid fa-phone-volume"
              topText="Emergency"
              bottomText=" 0479 245 3416"
            />
          </Col>
          <Col>
            <TopbarItemMobile
              icon="fa-regular fa-clock"
              topText="Work Hour"
              bottomText="09:00 AM-06:30 PM "
            />
          </Col>

          <Col>
            <TopbarItemMobile
              icon="fa-solid fa-location-dot"
              topText="Location"
              bottomText="Chengannur, Kerala"
            />
          </Col>
        </Row>
      </span>
    </span>
  );
}
