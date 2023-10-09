import React, { useEffect, useState } from "react";
import "../styles/launchpad.scss";
import Controls from "./Controls";
import Pad from "./Pad";

function Launchpad() {
  const [isOn, setIsOn] = useState(true);
  const [screenText, setScreenText] = useState("");
  const [bank, setBank] = useState("Bank 1");

  useEffect(function keyListener() {
    if (isOn) {
      document.addEventListener("keyup", handleShortcut);
      document.addEventListener("keydown", handleStyle);
    } else {
      document.removeEventListener("keyup", handleShortcut);
      document.removeEventListener("keydown", handleStyle);
    }
    return () => {
      document.removeEventListener("keyup", handleShortcut);
      document.removeEventListener("keydown", handleStyle);
    };
  },[isOn]);

  function handleShortcut({ key }) {
    const audioElement = document.getElementById(key.toUpperCase());
    if (audioElement) {
      const buttonElement = audioElement.parentElement;
      handleStyle({ key }, true);
      buttonElement.click();
    }
  }

  function handleStyle({ key }, removeStyle) {
    const audioElement = document.getElementById(key.toUpperCase());
    if (audioElement) {
      const buttonElement = audioElement.parentElement;
      const buttonColor = buttonElement.getAttribute("data-color");

      if (removeStyle)
        buttonElement.classList.remove(`shortcut-${buttonColor}`);
      else buttonElement.classList.add(`shortcut-${buttonColor}`);
    }
  }

  return (
    <div id="drum-machine" className="launchpad">
      <Controls
        isOn={isOn}
        setIsOn={setIsOn}
        screenText={screenText}
        setScreenText={setScreenText}
        setBank={setBank}
      />
      <Pad isOn={isOn} setScreenText={setScreenText} bank={bank} />
    </div>
  );
}

export default Launchpad;
