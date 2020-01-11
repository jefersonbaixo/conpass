import React from "react";
import "./Button.sass";

export default props => (
  <div className="buttonArea">
    <button className="hotspotButton" onClick={props.onClick}>
      Create Hotspot
    </button>
  </div>
);
