import React from "react";
import "./RedDot.sass";

export default props => (
  <div className="red-dot-border" style={props.dotPosition}>
    <div className="red-dot"></div>
  </div>
);
