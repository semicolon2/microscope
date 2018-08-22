import React, { PureComponent } from "react";
import { Router, Link } from "@reach/router";

import CardContainer from "./components/CardContainer";
import Landing from "./components/Landing";

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Landing path="/" />
        <CardContainer path="/room/:roomId" />
      </Router>
    );
  }
}

export default App;
