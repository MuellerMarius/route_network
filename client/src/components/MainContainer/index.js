import React, { useRef, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';
import Menu from '../Menu';
import * as Cst from '../../constants';
import './style.scss';

const MapView = React.lazy(() =>
  import(/* webpackPrefetch: true */ '../MapContainer/MapView')
);
const MapControls = React.lazy(() =>
  import(/* webpackPrefetch: true */ '../MapContainer/MapControls')
);
const DataControls = React.lazy(() =>
  import(/* webpackPrefetch: true */ '../DataEditContainer/DataControls')
);
const DataEditor = React.lazy(() =>
  import(/* webpackPrefetch: true */ '../DataEditContainer/DataEditor')
);

const MainContainer = () => {
  const addActionRef = useRef();

  return (
    <main>
      <Router basename={Cst.basename}>
        <Menu />
        <Switch>
          <Route path="/map">
            <Suspense fallback={<LoadingSpinner />}>
              <MapControls />
              <MapView />
            </Suspense>
          </Route>
          <Route path="/load">
            <LoadingSpinner />
          </Route>
          <Route path="/">
            <Suspense fallback={<LoadingSpinner />}>
              <DataControls addActionRef={addActionRef} />
              <DataEditor addActionRef={addActionRef} />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default MainContainer;
