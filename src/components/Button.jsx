import React from "react";
import "./button.css";

function Button({ icon, name, bgColor = "#ff3700", color = "#ffffff" }) {
  return (
    <div className="button">
      <a
        href="#"
        className="mainBtn"
        style={{ color: color, background: bgColor }}
      >
        {icon} {name}
      </a>
    </div>
  );
}

export default Button;
