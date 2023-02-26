import React from "react";
import { Container } from "react-bootstrap";
import { locationCaption } from "../Constants";

export default function Location(){
    return <Container>
        <h3 className="PrimaryColour fw700">Our Location</h3>

<p>{locationCaption}</p>
<iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.139964778952!2d76.61355711427807!3d9.320864086916973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622e85096c1ad%3A0x8591a1704992b577!2sDr.Oommen&#39;s%20Eye%20Hospital%20%26%20Micro%20Surgery%20Centre!5e0!3m2!1sen!2sin!4v1677433667944!5m2!1sen!2sin" 
width="900"
 height="300"
 style={{ border: "0" }}
allowfullscreen=""
 loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Container>
}