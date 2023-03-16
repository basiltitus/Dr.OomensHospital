import React from "react";
import "./ServiceItem.css";
export default function ServiceItem(props) {
  return (
    // <div class="card">
    //   <div class="slide slide1">
    //     <div class="content">
    //       <div class="icon">
    //         <i class={props.icon} aria-hidden="true"></i>
          
    //       </div>
    //     </div>
    //   </div>

    //   <div class="slide slide2">
    //     <div class="content">
    //       <h3>{props.title}</h3>

    //       <p>{props.caption}</p>
    //     </div>
    //   </div>
    // </div>

<div class="flip-card" tabIndex="0">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <div class="icon">
            <i class={props.icon} aria-hidden="true"></i>
          
          </div>
      <h3>{props.title}</h3>
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
