import React from "react";
import "../styles/button.scss";

function Button({ content, onClick, className }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
