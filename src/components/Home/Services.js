import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceItem from "./ServiceItem";
import './Services.css'

export default function Services(){
    return(
        <Row className='services'>
        <Col><ServiceItem icon='fa fa-solid fa-heart-circle-check' title='Cataract And Refractive Lens Surgery' caption='We at The Dr. Oommens Eye Hospital & Microsurgery Center have been pioneers in the field of cataract eye surgery offering cutting-edge technologies with world-class infrastructure and assures a high standard of care to a large population. Cataract Eye Surgery Cost in The Dr. Oommens Eye Hospital & Microsurgery Center is affordable and advanced surgical equipment is used to get high vision precision results' /></Col>
        <Col><ServiceItem icon='fa fa-solid fa-heart-circle-minus' title='Contact Lenses' caption='People who want to avoid wearing glasses to look better or change the colour of their Iris prefer to use contact lenses. Contact lenses are indicated in patients with keratoconus, and a special type of contact lenses like the Rose K contact lenses are available for correction of keratoconus We have a dedicated Contact lens clinic at Dr. Oommens Eye Hospital & Microsurgery Center to serve all of your needs' /></Col>
        <Col><ServiceItem icon='fa fa-solid fa-heart-circle-bolt' title='Optical Shoppe'  caption='We constantly strive to give the best to our patients. In this endeavor we have a state of the art optical outlet functioning in the premises, which will cater to your needs in the most scientific way. Say GOODBYE to conventional method of making glasses. Experience this new concept of scientific dispensing and a variety of spectacles lenses and frames, designed to suit individual needs, profession, looks and budget.'  /></Col>
        <Col><ServiceItem icon='fa fa-solid fa-heart-circle-exclamation' title='Computerized Vision Test' caption='At Dr. Oommen’s Eye Hospital we pride of ourselves in having one of the best refraction units in the country. Our refraction chambers are individually fitted with the latest Auto Refracto Keratometers (computerized eye testing), computerized lens meters (computers used to calculate lens power), distortion-free motorized vision testing charts, LED vision testing charts, LCD vision testing charts, topography (for astigmatism), etc .' /></Col>
        </Row>
    )
}