import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import MapView from '../MapContainer/MapView';
import MapControls from '../MapContainer/MapControls';
import DataControls from '../DataEditContainer/DataControls';
import Menu from '../Menu';
import DataEditor from '../DataEditContainer/DataEditor';
import * as Cst from '../../constants';
import './style.scss';

function debounce(func, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(this, arguments);
    }, ms);
  };
}

export default function MainContainer() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = debounce(function onResize() {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
    }, 500);
    window.addEventListener('resize', handleResize);

    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <main>
      <Router basename={Cst.basename}>
        <Menu />
        <Switch>
          <Route path="/map">
            <MapControls />
            <MapView dimensions={dimensions} />
          </Route>
          <Route path="/">
            <DataControls />
            <DataEditor dimensions={dimensions} />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}
