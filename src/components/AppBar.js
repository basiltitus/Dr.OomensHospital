import React from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AppointmentBtn from "./AppointmentBtn";


function AppBar(){
return( <Navbar collapseOnSelect expand="lg">
<Container>
  <Navbar.Brand href="#home">Dr. Oomens Hospital</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <AppointmentBtn />
    <Nav >
      <Nav.Link href="#aboutDiv" className='PrimaryColour fw500'>About Us</Nav.Link>
      <Nav.Link href="#EventsDiv" className='PrimaryColour fw500'>Events</Nav.Link>
      <Nav.Link eventKey={2} href="#AboutDiv" className='PrimaryColour fw500'>
Contact Us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>);
}

export default AppBar;