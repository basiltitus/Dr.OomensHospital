import React from "react";
import { Button, Card } from "react-bootstrap";
import AppointmentBtn from "./AppointmentBtn";

export default function CarouselObj(props){
return(
    <Card>
                  <Card.Img
                    variant="top"
                    src={props.imgurl}
                  />
                  <Card.Body>
                    <Card.Title>{props.title}</Card.Title>

                    <AppointmentBtn/>
                  </Card.Body>
                </Card>
)
}