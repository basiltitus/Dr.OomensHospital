import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { heroDoctor, mobileBG, visionImgUrl,heroHome } from '../../Constants';
import AppointmentBtn from '../Utilities/AppointmentBtn';

function HeroScreen(){
    return( 
        <div class="hero-section" id='#Home'>
        <div class="hero-image desktop-view">
          <img src={heroHome} alt="Hero Image"/>
        </div>
        <div class="hero-image mobile-view">
          <img style={{ objectFit:'cover' }} src={heroHome} alt="Hero Image"/>
        </div>
        <div class="hero-content PrimaryColour row">
        <Col>
        <h3>10+ years of trust</h3>
          <h1 className='fw700'>Dr. Oommens</h1>
         <h2>Eye Hospital & Micro Surgery Center</h2>
         <div class="mobile-view" style={{height:'5vh !important',display:'block' }}>

         </div>
          <AppointmentBtn/>
        </Col>
        {/* <Col className='desktop-view'>
          <img src={heroDoctor}/>
        </Col> */}
        </div>
      </div>
      
    );
}

export default HeroScreen;