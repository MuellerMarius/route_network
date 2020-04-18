import React, { useContext } from 'react';
import { Geographies, Geography } from 'react-simple-maps';
import { MapViewContext } from '../context/MapViewState';
import * as Cst from '../constants';

export default function Topography() {
  const { lightTheme } = useContext(MapViewContext);
  return (
    <Geographies
      fill={lightTheme ? Cst.geoColorLight : Cst.geoColorDark}
      stroke={lightTheme ? Cst.geoStrokeColorLight : Cst.geoStrokeColorDark}
      strokeWidth={0.5}
      geography={Cst.geoUrl}
    >
      {({ geographies }) =>
        geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
      }
    </Geographies>
  );
}
