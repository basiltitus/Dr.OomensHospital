import React from "react";
import { Col, Row } from "react-bootstrap";
import TopbarItem from "./TopbarItem";
import TopbarItemMobile from "./TopbarItemMobile";

export default function Topbar() {
  return (
    <span>
      <Row style={{ textAlign: "left" ,backgroundColor:'#F6F2F2'}} className="desktop-view">
        <Col md={5} sm={12} className="topbar-title PrimaryColour">
          Dr. Oommens
        </Col>
        <Col sm={true}>
          <TopbarItem
            icon="fa-solid fa-phone-volume"
            topText="Emergency"
            bottomText="(0484) 263 0466"
          />
        </Col>
        <Col sm={true}>
          <TopbarItem
            icon="fa-regular fa-clock"
            topText="Work Hour"
            bottomText="09:00 AM-08:00 PM "
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
        <div className='topbar-title PrimaryColour'>
            Dr. Oommens
            </div>
        <Row>
          <Col className="text-center">
            <TopbarItemMobile
              icon="fa-solid fa-phone-volume"
              topText="Emergency"
              bottomText="(0484) 263 0466"
            />
          </Col>
          <Col>
            <TopbarItemMobile
              icon="fa-regular fa-clock"
              topText="Work Hour"
              bottomText="09:00 AM-08:00 PM "
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
