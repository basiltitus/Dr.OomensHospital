import { Button, Card } from 'react-bootstrap';
import React from 'react';

export default function DoctorCard(props){
    return( <Card className='doctorCard'>
    <Card.Img variant="top" src={props.doctorImg} className='doctorImg'/>
    
    <Card.Body className='doctorCardBody'>
      <Card.Title className='fw700'>{props.doctorName}</Card.Title>
      <Card.Text>
        {props.doctorCaption}
      </Card.Text>
    </Card.Body>
  </Card>);
}