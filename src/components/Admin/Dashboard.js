import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
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
        <Topbar/>
        <Container fluid id='adminContent'>
        <Container fluid className="ind-page">
        {activePage=='booking'&&<BookingPage />}
        {activePage=='sms'&&<SMSPage />}
        </Container>
        <Footer/>
        </Container>
    </>)
}