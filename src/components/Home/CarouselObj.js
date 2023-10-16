import React from "react";
import { Button, Card } from "react-bootstrap";
import AppointmentBtn from "../Utilities/AppointmentBtn";

export default function CarouselObj(props){
return(<div class="card" id='servicecard' style={{ width: "21rem" }}>
<img
  src={props.imgUrl}
  class="card-img-top"
  alt="..."
/>
<div class="card-body">
  <h5 class="card-title">{props.title}</h5>
  <p>{props.caption}</p>
  <AppointmentBtn />
</div>
</div>
)
}