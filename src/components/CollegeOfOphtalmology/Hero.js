import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { mobileBG, visionImgUrl,heroHome } from '../../Constants';
import AppointmentBtn from '../Utilities/AppointmentBtn';
import DownloadButton from './DownloadButton';

function Hero(){
    return( 
        <div class="hero-section" id='#Home'>
        <div class="hero-image desktop-view">
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBOAxy472AMUEYkE6SuLxaTi0cG_Dh0zlTA&usqp=CAU" alt="Hero Image"/> */}
          <img src={heroHome} alt="Hero Image"/>
        </div>
        <div class="hero-image mobile-view">
          <img style={{objectFit:'cover'}} src={heroHome} alt="Hero Image"/>
        </div>
        <div class="hero-content PrimaryColour row">
        <Col>
        <h3>Excellency with Pride</h3>
          <h1 className='fw700'>Dr. Oommens</h1>
         <h2>College of Ophtalmology</h2>
          {/* <AppointmentBtn/> */}
          <DownloadButton title="Prospectus" />
        </Col>
        {/* <Col className='desktop-view'>
          <img src={heroDoctor}/>
        </Col> */}
        </div>
      </div>
      
    );
}

export default Hero;