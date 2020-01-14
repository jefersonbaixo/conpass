import React from "react";
import "./RedDot.sass";

export default props => (
  <div
    className="red-dot-border"
    style={{
      left: `${props.dotPosition[0]}px`,
      top: `${props.dotPosition[1]}px`
    }}
  >
    <div className="red-dot"></div>
  </div>
);
