import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { heroDoctor } from '../../Constants';
import AppointmentBtn from '../Utilities/AppointmentBtn';

function HeroScreen(){
    return( 
        <div class="hero-section" id='#Home'>
        <div class="hero-image desktop-view">
          <img src="https://s3-alpha-sig.figma.com/img/7cc5/1238/7c78e7b56ead9b18835dfc07133a9dea?Expires=1679270400&Signature=BWtqFJbBXlA2K0Zg1q5b4ukC3a6gnpEhbGdj7R1VCqcDoKx3q8JNYP9wot5Yb4X9C7qoxlPXWAuX1WO8783gNT3qE3hkayhq4vqj~w2NRGBQAEtRNhmafdQDz0n8tBKqDnr1K-YaCoYwJ5EiB9tAllU5gTh5wuxHqER~mKOkZmZu1u7L9Ta3ohvEE1SErGUw-nlXDOkxuKAFCIAKSPpYab2Yza9L7ZSygUcYuo6KQo2YJkoNZujgRxI4PtC2oGcGj8h3gVAlZRUEI23td7wiSZTtPSF7ah84mp-Fe4ekf2atYSiInBWFLHYKWNE-JjEYF3fsMtn~~txNxSntzzHj1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Hero Image"/>
        </div>
        <div class="hero-image mobile-view">
          <img src="https://png.pngtree.com/background/20210717/original/pngtree-natural-gradient-mobile-portrait-wallpaper-simple-minimalist-green-red-yellow-picture-image_1444967.jpg" alt="Hero Image"/>
        </div>
        <div class="hero-content PrimaryColour row">
        <Col>
        <h3>100 years of trust</h3>
          <h1 className='fw700'>Is a everything a BLUR for you?</h1>
         
          <AppointmentBtn/>
        </Col>
        <Col className='desktop-view'>
          <img src={heroDoctor}/>
        </Col>
        </div>
      </div>
      
    );
}

export default HeroScreen;