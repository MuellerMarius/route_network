import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import MapContainer from "./MapContainer";
import CSVControls from "./CSVControls";
import Menu from "./Menu";
import DataEditor from "./DataEditor";

export default function MainContainer() {
  const [themeLight, toggleTheme] = useState(true);
  const [onlyEurope, toggleView] = useState(false);

  return (
    <main>
      <Router>
        <Menu />
        <Switch>
          <Route path="/map">
            <MapContainer
              themeLight={themeLight}
              onlyEurope={onlyEurope}
              themeChanger={toggleTheme}
              viewChanger={toggleView}
            />
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
