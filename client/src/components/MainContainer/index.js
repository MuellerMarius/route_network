import React, { useRef } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import MapView from '../MapContainer/MapView';
import MapControls from '../MapContainer/MapControls';
import DataControls from '../DataEditContainer/DataControls';
import Menu from '../Menu';
import DataEditor from '../DataEditContainer/DataEditor';
import * as Cst from '../../constants';
import './style.scss';

const MainContainer = () => {
  const addActionRef = useRef();

  return (
    <main>
      <Router basename={Cst.basename}>
        <Menu />
        <Switch>
          <Route path="/map">
            <MapControls />
            <MapView />
          </Route>
          <Route path="/">
            <DataControls addActionRef={addActionRef} />
            <DataEditor addActionRef={addActionRef} />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default MainContainer;
