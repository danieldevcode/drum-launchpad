import React, { useRef, useState } from "react";
import "../styles/drum-pad.scss";

function DrumPad({ isOn, text, color, audioSrc, setScreenText }) {
  const audioRef = useRef();

  function playSample() {
    audioRef.current.play();
    setScreenText(() => getSampleName(audioSrc));
  }

  function getSampleName(audioSrc) {
    const regex = /(\w+-\w(?=\.))|(\w+(?=\.))/gi;
    const sampleName = audioSrc.match(regex);
    return sampleName[0].replaceAll(/(\_)|(\W)/g, " ");
  }

  return (
    <button
      id={getSampleName(audioSrc)}
      className={`drum-pad ${isOn ? color : "off disabled"}`}
      data-color={color}
      onClick={isOn ? playSample : null}
    >
      <p>{text}</p>
      <audio id={text} className="clip" ref={audioRef} src={audioSrc}></audio>
    </button>
  );
}

export default DrumPad;
