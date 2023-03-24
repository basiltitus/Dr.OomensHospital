import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "../Utilities/Topbar";
import BookingPage from "./BookingPage";
import SMSPage from "./SmsPage";
import { Container } from "react-bootstrap";
import Footer from "../Utilities/Footer";

export default function Dashboard(){
    const [activePage,setActivePage]=React.useState('booking');
    return(<>
        <Sidebar activePage={activePage} setActivePage={setActivePage}/>
        {/* <Topbar/> */}
        <Container fluid id='adminContent'>
        <Container fluid className="ind-page">
        {activePage=='booking'&&<BookingPage />}
        {activePage=='sms'&&<SMSPage />}
        </Container>
        <Footer/>
        </Container>
    </>)
}