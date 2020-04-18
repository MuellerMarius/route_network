import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import MapContainer from './MapContainer';
import CSVControls from './CSVControls';
import Menu from './Menu';
import DataEditor from './DataEditor';

export default function MainContainer() {
  return (
    <main>
      <Router basename={'/public/flights'}>
        <Menu />
        <Switch>
          <Route path="/map">
            <MapContainer />
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
