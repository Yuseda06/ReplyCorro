import React from "react";
import "./ModernButton.css";

const ModernButton = (props) => {
  return (
    <button className="modern-button" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default ModernButton;
