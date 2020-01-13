import React from "react";

import ReactDOM from "react-dom";
import "./Navbar.sass";
import logo from "../../assets/logo.png";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as Actions from "../../store/actions";
import Popover from "../Popover";
import RedDot from "../RedDot/index";

const Navbar = ({ isAddingHotspot }) => {
  function handleClick(e) {
    const dotPosition = {
      display: "flex",
      top: e.clientY - 10,
      left: e.clientX - 10
    };
    const redDotDiv = document.getElementById("red-dot");
    return ReactDOM.render(<RedDot dotPosition={dotPosition} />, redDotDiv);
  }

  const links = [
    "https://conpass.io",
    "https://google.com",
    "https://facebook.com",
    "https://reactjs.org"
  ];

  let listItems = links.map((link, i) => (
    <Popover
      url={link}
      key={i}
      num={i}
      hotspotClass={isAddingHotspot ? "link-hotspot" : "link "}
    />
  ));
  return (
    <div className="nav" onClick={e => handleClick(e)}>
      <img src={logo} alt="Logo" />
      {listItems}
    </div>
  );
};

const mapStateToProps = state => ({
  isAddingHotspot: state.isAddingHotspot
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
