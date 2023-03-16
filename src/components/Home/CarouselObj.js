import React from "react";
import { Button, Card } from "react-bootstrap";
import AppointmentBtn from "../Utilities/AppointmentBtn";

export default function CarouselObj(props){
return(
    <Card>
                  <Card.Img
                    variant="top"
                    src={props.imgurl}
                  />
                  <Card.Body>
                    <Card.Title><h1>{props.title}</h1></Card.Title>

                    <AppointmentBtn/>
                  </Card.Body>
                </Card>
)
}