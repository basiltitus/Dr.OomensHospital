import React from "react";
import "./index.css";

const AnimatedCard = ({ imgUrl, heading, caption,onClick }) => {
  return (
    <div className="card-container" onClick={onClick}>
      <div className="card-image">
        <img src={imgUrl} alt="card" />
      </div>
      {(heading!=undefined||caption!=undefined)&&<div className="card-content">
        <h2>{heading}</h2>
        <p>{caption}</p>
      </div>}
    </div>
  );
};

export default AnimatedCard;
