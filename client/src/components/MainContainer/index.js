import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import MapView from '../MapContainer/MapView';
import MapControls from '../MapContainer/MapControls';
import DataControls from '../DataEditContainer/DataControls';
import Menu from '../Menu';
import DataEditor from '../DataEditContainer/DataEditor';
import * as Cst from '../../constants';
import './style.scss';

const debounce = (func, ms, ...args) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(this, ...args);
    }, ms);
  };
};

const MainContainer = () => {
  const addActionRef = useRef();
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
    }, 500);
    window.addEventListener('resize', handleResize);

    return () => {
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
            <DataControls addActionRef={addActionRef} />
            <DataEditor dimensions={dimensions} addActionRef={addActionRef} />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default MainContainer;
