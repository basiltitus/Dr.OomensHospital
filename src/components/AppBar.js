import React from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AppointmentBtn from "./AppointmentBtn";


function AppBar(){
return( <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'white',zIndex:100}}>
<Container>
  <Navbar.Brand href="#home" className='PrimaryColour'></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <AppointmentBtn />
    <Nav >
      <Nav.Link href="#AboutDiv" className='PrimaryColour fw700'>About Us</Nav.Link>
      <Nav.Link href="#EventsDiv" className='PrimaryColour fw700'>Events</Nav.Link>
      <Nav.Link eventKey={2} href="#location-cont" className='PrimaryColour fw700'>
Contact Us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>);
}

export default AppBar;