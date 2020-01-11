import React from "react";
import "./Button.sass";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as Actions from "../../store/actions";

const Button = ({ toggleIsAddingHotspot }) => (
  <div className="buttonArea">
    <button className="hotspotButton" onClick={() => toggleIsAddingHotspot()}>
      Create Hotspot
    </button>
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(null, mapDispatchToProps)(Button);
