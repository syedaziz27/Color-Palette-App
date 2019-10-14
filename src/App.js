import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>PALETTE L GOES HERE</h1>} />
        <Route exact path="/palette/:id" render={() => <h1>IND Pal</h1>} />
      </Switch>
    );

    // <Palette palette={generatePalette(seedColors[4])} />;
  }
}

export default App;
