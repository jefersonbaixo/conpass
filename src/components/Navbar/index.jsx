import React from "react";
import "./Navbar.sass";
import logo from "../../assets/logo.png";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as Actions from "../../store/actions";

const Link = props => (
  <a className="link" onClick={props.onClick} href={props.url}>
    Link fake {props.id}
  </a>
);

const Navbar = ({ isAddingHotspot, addHotspot }) => {
  const links = [
    { url: "https://conpass.io", id: 0 },
    { url: "https://google.com", id: 1 },
    { url: "https://facebook.com", id: 2 },
    { url: "https://reactjs.org", id: 3 }
  ];

  let listItems = links.map((link, i) => (
    <Link
      url={links[i].url}
      key={i}
      id={i}
      onClick={e => (isAddingHotspot ? addHotspot(e, link) : null)}
    />
  ));
  return (
    <div className="nav">
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
