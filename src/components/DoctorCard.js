import { Button, Card } from 'react-bootstrap';
import React from 'react';

export default function DoctorCard(props){
    return( 
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 card-item">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src={props.doctorImg}/>
        </div>
        <div class="team-content">
          <h3 class="name">{props.doctorName}</h3>
          <h4 class="title">{props.doctorCaption}</h4>
        </div>
        <ul class="social">
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
    // <Card className='doctorCard'>
    /* <Card.Img variant="top" src={props.doctorImg} className='doctorImg'/>
    
    <Card.Body className='doctorCardBody'>
      <Card.Title className='fw700'>{props.doctorName}</Card.Title>
      <Card.Text>
        {props.doctorCaption}
      </Card.Text>
    </Card.Body>
  </Card> */
  );
}