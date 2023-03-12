import React from "react";
import Counter from "./Counter";
export default function CounterCard(props){
    return(
        <div>
        <div className="circle-icon">

            <i class="fa-solid fa-heart" ></i>
        </div>
            <Counter number={5000} title='+' />
            <p>Patients Treated</p>
        </div>
    );
}