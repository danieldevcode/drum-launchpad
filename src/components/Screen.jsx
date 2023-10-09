import React from "react";
import "../styles/screen.scss";

function Screen({ isOn, screenText }) {
  return (
    <div id="display" className={`screen ${isOn ? "on" : "off"}`}>
      {screenText}
    </div>
  );
}

export default Screen;
