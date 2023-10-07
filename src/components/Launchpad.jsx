import React, { useEffect, useState } from "react";
import "../styles/launchpad.scss";
import Controls from "./Controls";
import Pad from "./Pad";

function Launchpad() {
  const [isOn, setIsOn] = useState(true);
  const [screenText, setScreenText] = useState("");
  const [bank, setBank] = useState("Bank 1");

  useEffect(
    function keyListener() {
      if (isOn) {
        document.addEventListener("keydown", keyShortcut);
      } else {
        document.removeEventListener("keydown", keyShortcut);
      }
      return () => document.removeEventListener("keydown", keyShortcut);
    },
    [isOn]
  );

  function keyShortcut({ key }) {
    const audioElement = document.getElementById(key.toUpperCase());
    if (audioElement) {
      const buttonElement = audioElement.parentElement;
      const buttonColor = buttonElement.getAttribute("data-color");

      // Clicked style control
      buttonElement.classList.add(`shortcut-${buttonColor}`);
      setTimeout(() => {
        buttonElement.classList.remove(`shortcut-${buttonColor}`);
      }, 100);

      buttonElement.click();
    }
  }

  return (
    <div id="drum-machine" className="launchpad">
      <Controls
        isOn={isOn}
        setIsOn={setIsOn}
        screenText={screenText}
        setScreenText={setScreenText}
        bank={bank}
        setBank={setBank}
      />
      <Pad isOn={isOn} setScreenText={setScreenText} bank={bank} />
    </div>
  );
}

export default Launchpad;
