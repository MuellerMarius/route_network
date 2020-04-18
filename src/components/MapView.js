import React, { useContext } from 'react';
import { MapViewContext } from '../context/MapViewState';
import { ComposableMap } from 'react-simple-maps';
import Topography from './Topography';
import Routes from './Routes';
import * as Cst from '../constants';

export default function MapView() {
  const { lightTheme, focusViewOnEurope } = useContext(MapViewContext);

  return (
    <div className={'map-area' + (lightTheme ? '' : ' map-area--dark-bg')}>
      <ComposableMap
        width={1000}
        projection={focusViewOnEurope ? 'geoAzimuthalEqualArea' : 'geoMercator'}
        projectionConfig={focusViewOnEurope ? Cst.projEurope : Cst.projWorld}
      >
        <Topography />
        <Routes />
      </ComposableMap>
    </div>
  );
}
