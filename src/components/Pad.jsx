import React from "react";
import "../styles/pad.scss";
import DrumPad from "./DrumPad";
import { samplePackOne, samplePackTwo } from "../samplePacks.js";

function Pad({ isOn, setScreenText, bank }) {
  const samples = bank == "Bank 1" ? samplePackOne : samplePackTwo;

  return (
    <div id="pad" className="pad">
      <DrumPad
        isOn={isOn}
        text="Q"
        color="color-1"
        audioSrc={samples[0]}
        setScreenText={setScreenText}
      />
      <DrumPad
        isOn={isOn}
        text="W"
        color="color-1"
        audioSrc={samples[1]}
        setScreenText={setScreenText}
      />
      <DrumPad
        isOn={isOn}
        text="E"
        color="color-1"
        audioSrc={samples[2]}
        setScreenText={setScreenText}
      />
      <DrumPad
        isOn={isOn}
        text="A"
        color="color-2"
        audioSrc={samples[3]}
        setScreenText={setScreenText}
      />
      <DrumPad
        isOn={isOn}
        text="S"
        color="color-2"
        audioSrc={samples[4]}
        setScreenText={setScreenText}
      />
      <DrumPad
        isOn={isOn}
        text="D"
        color="color-2"
        audioSrc={samples[5]}
        setScreenText={setScreenText}
      />
      <DrumPad
        isOn={isOn}
        text="Z"
        color="color-3"
        audioSrc={samples[6]}
        setScreenText={setScreenText}
      />
      <DrumPad
        isOn={isOn}
        text="X"
        color="color-3"
        audioSrc={samples[7]}
        setScreenText={setScreenText}
      />
      <DrumPad
        isOn={isOn}
        text="C"
        color="color-3"
        audioSrc={samples[8]}
        setScreenText={setScreenText}
      />
    </div>
  );
}

export default Pad;
