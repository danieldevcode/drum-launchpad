import React, { useState } from "react";
import "../styles/button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ isOn, text, color, size, onClick, icon }) {
  return (
    <div className={`button ${size} ${isOn ? color : "off"}`} onClick={onClick}>
      {text ? <p>{text}</p> : null}
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
    </div>
  );
}

export default Button;
