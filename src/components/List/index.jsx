import React from "react";
import "./List.sass";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as Actions from "../../store/actions";

const List = ({ hotspots, deleteHotspot }) => (
  <div className="divList">
    <h5 className="listTitle">List of Hotspots</h5>
    <ul className="list">
      {hotspots.map((hotspot, i) => (
        <div className="el" key={i}>
          <span className="elName">{hotspot.url}</span>
          <button
            className="link-button"
            onClick={() => deleteHotspot(hotspot)}
          >
            Delete
          </button>
        </div>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  hotspots: state.hotspots
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
