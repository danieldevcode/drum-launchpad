import React from "react";
import "../styles/pad.scss";
import DrumPad from "./DrumPad";

function Pad({ isOn, setScreenText }) {
  return (
    <div id="pad" className="pad">
      <DrumPad
        isOn={isOn}
        text="Q"
        color="color-1"
        audioSrc="/samples/Heater-1.mp3"
        setScreenText={setScreenText}
      />
      <DrumPad
        isOn={isOn}
        text="W"
        color="color-1"
        audioSrc="/samples/Heater-2.mp3"
        setScreenText={setScreenText}
      />
      <DrumPad
        isOn={isOn}
        text="E"
        color="color-1"
        audioSrc="/samples/Heater-3.mp3"
        setScreenText={setScreenText}
      />
      <DrumPad
        isOn={isOn}
        text="A"
        color="color-2"
        audioSrc="/samples/Heater-4.mp3"
        setScreenText={setScreenText}
      />
      <DrumPad
        isOn={isOn}
        text="S"
        color="color-2"
        audioSrc="/samples/Heater-6.mp3"
        setScreenText={setScreenText}
      />
      <DrumPad
        isOn={isOn}
        text="D"
        color="color-2"
        audioSrc="/samples/Dsc_Oh.mp3"
        setScreenText={setScreenText}
      />
      <DrumPad
        isOn={isOn}
        text="Z"
        color="color-3"
        audioSrc="/samples/Cev_H2.mp3"
        setScreenText={setScreenText}
      />
      <DrumPad
        isOn={isOn}
        text="X"
        color="color-3"
        audioSrc="/samples/Kick_n_Hat.mp3"
        setScreenText={setScreenText}
      />
      <DrumPad
        isOn={isOn}
        text="C"
        color="color-3"
        audioSrc="/samples/RP4_KICK_1.mp3"
        setScreenText={setScreenText}
      />
    </div>
  );
}

export default Pad;
