import React from "react";

import ReactDOM from "react-dom";
import "./Navbar.sass";
import logo from "../../assets/logo.png";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as Actions from "../../store/actions";
import Popover from "../Popover";
import RedDot from "../RedDot/index";

const Navbar = ({ isAddingHotspot, positions }) => {
  function handleClick(e) {
    if (!isAddingHotspot) return null;
    const dotPosition = [e.clientX - 10, e.clientY - 10];
    positions.push(dotPosition);
    isAddingHotspot = false;
    const redDotDiv = document.getElementById("red-dot");
    console.log(positions);
    return ReactDOM.render(
      positions.map((item, i) => <RedDot dotPosition={item} key={i} />),
      redDotDiv
    );
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
  isAddingHotspot: state.isAddingHotspot,
  positions: state.positions
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
