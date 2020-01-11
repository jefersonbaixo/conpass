import React from 'react';
import './App.sass';
import Navbar from './components/Navbar/Navbar';
import List from './components/List/List';
import Button from './components/Button/Button';




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
