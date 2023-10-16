import React from "react";
import { Col, Row } from "react-bootstrap";
export default function TopbarItemMobile(props){
    return(<><Row className="top-item top-item-icon" onClick={()=>{props.topText=='Emergency'&&window.open('tel:+91'+props.bottomText)}}>
    <i class={props.icon}></i></Row>
    <Row>
        <Col className="top-item-text">
             <div className="top-item-top-text">{props.topText}</div>
            <div className='top-item-bottom-text'>{props.bottomText}</div>
        </Col>
    </Row> </>)
}
