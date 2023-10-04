import React, { useState } from "react";
import "../styles/launchpad.scss";
import Controls from "./Controls";
import Pad from "./Pad";

function Launchpad() {
  const [isOn, setIsOn] = useState(true);
  return (
    <div className="launchpad">
      <Controls isOn={isOn} setIsOn={setIsOn}/>
      <Pad isOn={isOn} />
    </div>
  );
}

export default Launchpad;
