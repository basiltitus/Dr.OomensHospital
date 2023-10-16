import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "../Utilities/Topbar";
import BookingPage from "./BookingPage";
import SMSPage from "./SmsPage";
import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../Utilities/Footer";

export default function Dashboard(props) {
  const [activePage, setActivePage] = React.useState("bookings");
  const [showSideMenu, setShowSideMenu] = React.useState(false);
  return (
    <>
      <Sidebar
        show={showSideMenu}
        onHide={() => setShowSideMenu(false)}
        activePage={activePage}
        setActivePage={(val) => {
          if(val=='LOGOUT')
          props.logout();
          setActivePage(val);
          setShowSideMenu(false);
        }}
      />
      {/* <Topbar/> */}
      <Container fluid id="adminContent">
        <Row className='admin-header'>
          <Col md={1}>
            <Button onClick={() => setShowSideMenu(true)} className="hamBtn">
              <i class="fa-solid fa-bars"></i>
            </Button>
          </Col>
          <Col>
            <h1 className="fw800 ">
              {activePage == "bookings" && "Booking Management"}
              {activePage == "sms" && "SMS Management"}
            </h1>
          </Col>
        </Row>
        <hr></hr>
        {activePage == "bookings" && <BookingPage />}
        {activePage == "sms" && <SMSPage />}
      </Container>
      <Footer />
    </>
  );
}
