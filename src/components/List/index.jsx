import React from "react";
import "./List.sass";

export default class List extends React.Component {
  render() {
    return (
      <div className="divList">
        <h5 className="listTitle">List of Hotspots</h5>
        <ul className="list">
          {this.props.hotspots.map((el, i) => (
            <div className="el" key={i}>
              <span className="elName">{el.url}</span>
              <button
                className="link-button"
                onClick={() => this.props.onClick(el)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
