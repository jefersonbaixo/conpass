import React from 'react';
import './App.sass';
import logo from './assets/logo.png'


const Link = props =>
  <a className="link" onClick={props.onClick} href={props.url}>Link fake {props.id}</a>

const Button = props =>
  <div className="buttonArea">
    <button className="hotspotButton" onClick={props.onClick}>Create Hotspot</button>
  </div>

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [
        { url: 'https://conpass.io', id: 0 },
        { url: 'https://google.com', id: 1 },
        { url: 'https://facebook.com', id: 2 },
        { url: 'https://reactjs.org', id: 3 },
      ]
    }
  }

  render() {
    const listItems = this.state.links.map((link, i) =>
      <Link
        url={this.state.links[i].url} key={i} id={i}
        onClick={e => this.props.onClick(e, this.state.links[i])}
      />
    );
    return (
      <div className="nav">
        <img src={logo} alt="Logo" />
        {listItems}
      </div>
    )
  }
}

class List extends React.Component {

  render() {
    return (
      <div className="divList">
        <h5 className="listTitle">List of Hotspots</h5>
        <ul className="list">
          {this.props.hotspots.map((el, i) =>
            <div className="el" key={i}>
              <span className="elName">{el.url}</span>
              <button className="link-button" onClick={() => this.props.onClick(el)}>Delete</button>
            </div>
          )}
        </ul>
      </div>
    )
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hotspots: [],
      isIncludingHotspot: false
    }
  }

  addHotSpot(e, link) {
    if(!this.state.isIncludingHotspot)
      return null;
    e.preventDefault();
    let hotspots = this.state.hotspots.slice();
    hotspots.push(link);
    this.setState({ hotspots: hotspots })
    this.setState({ isIncludingHotspot: false });
  }

  deleteHotSpot(link) {
    let hotspots = this.state.hotspots.slice();
    const linkIndex = hotspots.findIndex(el => el.id === link.id);
    hotspots.splice(linkIndex, 1);
    this.setState({ hotspots: hotspots });
  }

  render() {
    return (
      <div>
        <Navbar onClick={(e, link) => this.addHotSpot(e, link)} />
        <Button onClick={() => this.setState({ isIncludingHotspot: true })} />
        <List hotspots={this.state.hotspots} onClick={el => this.deleteHotSpot(el)} />
      </div>
    );
  }
}

export default App;
