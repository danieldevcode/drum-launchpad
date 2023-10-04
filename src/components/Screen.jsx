import React from "react";
import "../styles/screen.scss";

function Screen({ isOn, text }) {
  return <div className={`screen ${isOn ? "on" : "off"}`}>{text}</div>;
}

export default Screen;
