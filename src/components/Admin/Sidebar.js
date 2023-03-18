import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default function Sidebar(props){
    return(<SideNav
        onSelect={(selected) => {
            console.log(selected)
           props.setActivePage(selected);
        }}
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="booking">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Bookings
                </NavText>
            </NavItem>
        </SideNav.Nav>
        <SideNav.Nav>
        <NavItem eventKey="sms">
                <NavIcon>
                <i class="fa fa-fw fa-message" style={{ fontSize: '1.75em',color:"white" }}></i>
                </NavIcon>
                <NavText>
                    SMS Center
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>)
}