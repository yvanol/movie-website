import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

function Button({ icon, name, bgColor = "#ff3700", color = "#ffffff" }) {
  return (
    <div className="button">

      <Link to="/#"  className="mainBtn" style={{ color: color, background: bgColor }} >
      {icon} {name}
      </Link>
      
    </div>
  );
}

export default Button;
