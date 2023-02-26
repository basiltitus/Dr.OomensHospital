import React from 'react';
import { Button } from 'react-bootstrap';
import AppointmentBtn from './AppointmentBtn';

function HeroScreen(){
    return( 
        <div className='jumbotron'>
        
            <h1 className='heroText'>Is Everything a BLUR <br/>for you?!</h1>
            <br/>
            <p>
                <AppointmentBtn />
            </p>
        </div>
    );
}

export default HeroScreen;