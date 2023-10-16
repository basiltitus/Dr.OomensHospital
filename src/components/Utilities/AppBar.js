import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { redirect, useNavigate } from "react-router-dom";
import AppointmentBtn from "./AppointmentBtn";

function AppBar() {
  let navigate = useNavigate();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "white", zIndex: 100 }}
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="PrimaryColour"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link
              href="#Home"
              onClick={() => {
                navigate("../../");
              }}
              className="PrimaryColour fw700"
            >
              Home
            </Nav.Link>
            <Nav.Link
              eventKey={3}
              onClick={() => {
                navigate("../pages/collegeofophtalmology");
              }}
              className="PrimaryColour fw700"
            >
              College Of Ophtalmology
            </Nav.Link>
            <Nav.Link
              href="#AboutDiv"
              onClick={() => {
                navigate("../../");
              }}
              className="PrimaryColour fw700"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("../pages/events");
              }}
              className="PrimaryColour fw700"
            >
              Events
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              onClick={() => {
                navigate("../../");
              }}
              href="#location-cont"
              className="PrimaryColour fw700"
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <AppointmentBtn />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
