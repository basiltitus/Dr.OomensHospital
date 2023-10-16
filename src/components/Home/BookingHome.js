import React from 'react'
import { Container } from 'react-bootstrap'
import AppointmentBtn from '../Utilities/AppointmentBtn'
import './BookingHome.css'

export default function BookingHome(){
    return (
        <Container fluid id='booking-home-div'>
        <div className='content'>
        
            <h1>Book An Appointment with our Doctors</h1>
            <p>We have highly qualified doctors who are expert practitioners in their specialised fields.!Our hospital is well-equipped with state-of-the-art surgical and diagnostic equipment, sterile operation theaters and total productivity systems with emphasis on patient satisfaction.</p>
            <AppointmentBtn />
        </div>
        </Container>
    )
} 