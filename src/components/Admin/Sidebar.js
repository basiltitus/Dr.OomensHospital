import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { ListGroup, Offcanvas } from "react-bootstrap";

export default function Sidebar(props){
    
    return    <Offcanvas show={props.show} onHide={props.onHide} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>More Options</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action onClick={()=>props.setActivePage('bookings')}>
      <i class="fa-regular fa-calendar-days"></i> {" "}Bookings
      </ListGroup.Item>
      <ListGroup.Item action onClick={()=>props.setActivePage('sms')}>
      <i class="fa-solid fa-comment-sms"></i>{" "} SMS Dashboard
      </ListGroup.Item>
      <ListGroup.Item action onClick={()=>props.setActivePage('sms')}>
      <i class="fa-solid fa-comment-sms"></i>{" "}Promotional SMS
      </ListGroup.Item>
      <ListGroup.Item action onClick={()=>props.setActivePage('LOGOUT')}>
      <i class="fa-solid fa-right-from-bracket"></i>{" "}Logout
      </ListGroup.Item>
    </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
}