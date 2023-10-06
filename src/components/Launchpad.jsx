import React, { useEffect, useState } from "react";
import "../styles/launchpad.scss";
import Controls from "./Controls";
import Pad from "./Pad";

function Launchpad() {
  const [isOn, setIsOn] = useState(true);
  const [screenText, setScreenText] = useState("");

  useEffect(function onLoad() {
    document.addEventListener("keypress", ({ key }) => keyShortcut(key));
    return () =>
      document.removeEventListener("keypress", ({ key }) => keyShortcut(key));
  }, []);

  function keyShortcut(key) {
    const button = document.getElementById(key);
    if (button) {
      // TODO: change style
      // TODO: check the react-hotkeys
      button.click();
    }
  }

  return (
    <div id="drum-machine" className="launchpad">
      <Controls
        isOn={isOn}
        setIsOn={setIsOn}
        screenText={screenText}
        setScreenText={setScreenText}
      />
      <Pad isOn={isOn} setScreenText={setScreenText} />
    </div>
  );
}

export default Launchpad;
