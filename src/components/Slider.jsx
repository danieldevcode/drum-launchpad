import React, { useEffect, useState } from "react";
import "../styles/slider.scss";

function Slider({ isOn, setScreenText }) {
  const [volume, setVolume] = useState(50);

  useEffect(function updateVolume() {
    setScreenText(`Volume: ${volume}%`)
    const audioElements = document.getElementsByTagName("audio");
    Object.values(audioElements).forEach((audioElement) => {
      audioElement.volume = volume / 100;
    });
  }, [volume]);

  return (
    <input
      className={`slider ${isOn ? "on" : "off disabled"}`}
      type="range"
      onChange={(e) => setVolume(e.target.value)}
      defaultValue={volume}
    />
  );
}

export default Slider;
