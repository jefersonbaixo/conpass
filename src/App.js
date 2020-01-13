import React from "react";
import "./App.sass";
import Navbar from "./components/Navbar";
import List from "./components/List";
import Button from "./components/Button";

import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotspots: [],
      isIncludingHotspot: false
    };
  }

  addHotSpot(e, link) {
    if (!this.state.isIncludingHotspot) return null;
    e.preventDefault();
    link.id = Math.random();
    console.log(link);
    let hotspots = this.state.hotspots.slice();
    hotspots.push(link);
    this.setState({ hotspots: hotspots });
    this.setState({ isIncludingHotspot: false });
  }

  deleteHotSpot(link) {
    console.log(link);
    let hotspots = this.state.hotspots.slice();
    const linkIndex = hotspots.findIndex(el => el.id === link.id);
    hotspots.splice(linkIndex, 1);
    this.setState({ hotspots: hotspots });
  }

  render() {
    return (
      <div id="app-root">
        <Provider store={store}>
          <Navbar />
          <Button />
          <List hotspots={this.state.hotspots} />
        </Provider>
        <div id="red-dot"></div>
      </div>
    );
  }
}

export default App;
