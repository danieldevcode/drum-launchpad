import React from "react";
import "../styles/controls.scss";
import Button from "./Button";
import Screen from "./Screen";
import Slider from "./Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

function Controls({ isOn, setIsOn, screenText, setScreenText, setBank }) {
  function powerHandler() {
    setIsOn((prev) => !prev);
    setScreenText("DRUM LAUNCHPAD");
  }

  function bankHandler() {
    setBank((prev) => {
      const newBank = prev == "Bank 1" ? "Bank 2" : "Bank 1";
      setScreenText(newBank);
      return newBank;
    });
  }

  return (
    <div className="controls-container">
      <div className="controls">
        <Button
          content={<FontAwesomeIcon icon={faPowerOff} />}
          onClick={powerHandler}
          className={isOn ? "on" : "off"}
        />
        <Screen isOn={isOn} screenText={screenText} />
        <Button
          content="BANK"
          onClick={bankHandler}
          className={isOn ? "on" : "off disabled"}
        />
        <Slider isOn={isOn} setScreenText={setScreenText} />
      </div>
    </div>
  );
}

export default Controls;
