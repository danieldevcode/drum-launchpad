import React from "react";
import "../styles/slider.scss";

function Slider({ isOn }) {
  return <input className={`slider ${isOn ? "on" : "off"}`} type="range" />;
}

export default Slider;
