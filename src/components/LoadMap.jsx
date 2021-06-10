import React from "react";
import mark from "../images/icon-location.svg";

function LoadMap() {
  return (
    <div className="loader">
      <img src={mark} alt="mark Location" className="loader__img"/>
    </div>
  )
}

export default LoadMap;