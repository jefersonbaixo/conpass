import React from "react";
import "./App.sass";
import Navbar from "./components/Navbar";
import List from "./components/List";
import Button from "./components/Button";

import { Provider } from "react-redux";
import store from "./store";

export const App = () => (
  <div id="app-root">
    <Provider store={store}>
      <Navbar />
      <Button />
      <List />
    </Provider>
    <div id="red-dot"></div>
  </div>
);

export default App;
