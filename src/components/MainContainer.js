import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import MapControls from "./MapControls";
import CSVControls from "./CSVControls";
import MapDisplay from "./MapDisplay";
import Menu from "./Menu";
import DataEditor from "./DataEditor";

export default function MainContainer() {
  return (
    <main>
      <Router>
        <Menu />
        <Switch>
          <Route path="/map">
            <MapControls />
            <MapDisplay />
          </Route>
          <Route path="/">
            <CSVControls />
            <DataEditor />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}
