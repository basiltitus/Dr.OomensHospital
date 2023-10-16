import React from "react";
import "./ServiceItem.css";
export default function ServiceItem(props) {
  return (
    <div class="flip-card" tabIndex="0">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="icon">
            <i class={props.icon} aria-hidden="true"></i>
          </div>
          <h3>{props.title}</h3>
          <p className="PrimaryColour">
            {props.caption.substring(0, 90)}..
            <br />
            <br />
            Read More....
          </p>
        </div>
        <div class="flip-card-back">
          <div class="icon">
            <i class={props.icon} aria-hidden="true"></i>
          </div>
          <h3>{props.title}</h3>
          <p>{props.caption}</p>
        </div>
      </div>
    </div>
  );
}
