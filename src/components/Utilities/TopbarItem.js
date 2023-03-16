import React from "react";
import { Col, Row } from "react-bootstrap";
export default function TopbarItem(props){
    return(<Row className="top-item" onClick={()=>{props.topText=='Emergency'&&window.open('tel:+9190123456');
    if(props.topText=='Location')window.location='../../#location-cont';
    }}>
        <Col sm={2} className='top-item-icon'><i class={props.icon}></i></Col>
        <Col className="top-item-text">
             <Row className="top-item-top-text">{props.topText}</Row>
            <Row className='top-item-bottom-text'>{props.bottomText}</Row>
        </Col>
    </Row>)
}
