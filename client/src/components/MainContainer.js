import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { MapViewProvider } from '../context/MapViewState';
import MapView from './MapContainer/MapView';
import MapControls from './MapContainer/MapControls';
import DataControls from './DataEditContainer/DataControls';
import Menu from './Menu/';
import DataEditor from './DataEditContainer/DataEditor';
import * as Cst from '../constants';

export default function MainContainer() {
  return (
    <main>
      <Router basename={Cst.basename}>
        <Menu />
        <Switch>
          <Route path="/map">
            <MapViewProvider>
              <MapControls />
              <MapView />
            </MapViewProvider>
          </Route>
          <Route path="/">
            <DataControls />
            <DataEditor />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}
