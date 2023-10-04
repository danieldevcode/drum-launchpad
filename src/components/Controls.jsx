import React from "react";
import "../styles/controls.scss";
import Button from "./Button";
import Screen from "./Screen";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider";

function Controls({ isOn, setIsOn }) {
  function launchpadPower() {
    setIsOn((prev) => !prev);
  }
  return (
    <div className="controls-container">
      <div className="controls">
        <Button
          onClick={launchpadPower}
          isOn={isOn}
          icon={faPowerOff}
          color="color-4"
          size="sm"
        />
        <Screen isOn={isOn} text="SCREEN" />
        <Button isOn={isOn} color="color-4" text="BANK" size="sm" />
        <Slider isOn={isOn} />
      </div>
    </div>
  );
}

export default Controls;
