import React, { Component } from "react";

import Header from "./components/Header";
import Main from "./pages/main";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Main></Main>
      </>
    );
  }
}

export default App;
