import React, { useContext } from 'react';
import { ComposableMap } from 'react-simple-maps';
import { GlobalContext } from '../../../context/GlobalState';
import Topography from './Topography';
import Routes from './Routes';
import * as Cst from '../../../constants';

import './style.scss';

export default function MapView() {
  const { lightTheme, focusViewOnEurope } = useContext(GlobalContext);

  return (
    <div className={'map-area' + (lightTheme ? '' : ' map-area--dark-bg')}>
      <ComposableMap
        width={1000}
        projection={'geoMercator'}
        projectionConfig={focusViewOnEurope ? Cst.projEurope : Cst.projWorld}
      >
        <Topography />
        <Routes />
      </ComposableMap>
    </div>
  );
}
