import React from "react";
import "../styles/controls.scss";
import Button from "./Button";
import Screen from "./Screen";
import Slider from "./Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

function Controls({ isOn, setIsOn, screenText, setScreenText }) {
  function powerBtnFunc() {
    setIsOn((prev) => !prev);
    setScreenText("DRUM LAUNCHPAD");
  }

  return (
    <div className="controls-container">
      <div className="controls">
        <Button
          content={<FontAwesomeIcon icon={faPowerOff} />}
          onClick={powerBtnFunc}
          className={isOn ? "on" : "off"}
        />
        <Screen isOn={isOn} screenText={screenText} />
        <Button content="BANK" className={isOn ? "on" : "off disabled"} />
        <Slider isOn={isOn} setScreenText={setScreenText} />
      </div>
    </div>
  );
}

export default Controls;
