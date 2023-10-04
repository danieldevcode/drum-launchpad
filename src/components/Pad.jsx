import React, { useState } from "react";
import "../styles/pad.scss";
import Button from "./Button";

function Pad({ isOn }) {
  return (
    <div className="pad">
      <Button isOn={isOn} text="Q" color="color-1" size="m" />
      <Button isOn={isOn} text="W" color="color-1" size="m" />
      <Button isOn={isOn} text="E" color="color-1" size="m" />
      <Button isOn={isOn} text="A" color="color-2" size="m" />
      <Button isOn={isOn} text="S" color="color-2" size="m" />
      <Button isOn={isOn} text="D" color="color-2" size="m" />
      <Button isOn={isOn} text="Z" color="color-3" size="m" />
      <Button isOn={isOn} text="X" color="color-3" size="m" />
      <Button isOn={isOn} text="C" color="color-3" size="m" />
    </div>
  );
}

export default Pad;
