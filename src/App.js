import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    return <Palette {...seedColors[7]} />;
  }
}

export default App;
