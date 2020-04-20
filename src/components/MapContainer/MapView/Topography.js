import React, { useContext } from 'react';
import { Geographies, Geography } from 'react-simple-maps';
import { MapViewContext } from '../../../context/MapViewState';
import { GlobalContext } from '../../../context/GlobalState';
import * as Cst from '../../../constants';

export default function Topography() {
  const { lightTheme } = useContext(MapViewContext);
  const { windowDimensions } = useContext(GlobalContext);

  return (
    <Geographies
      fill={lightTheme ? Cst.geoColorLight : Cst.geoColorDark}
      stroke={lightTheme ? Cst.geoStrokeColorLight : Cst.geoStrokeColorDark}
      strokeWidth={0.5}
      geography={
        windowDimensions.width < Cst.screenLgWidth ? Cst.geoUrlSm : Cst.geoUrlLg
      }
    >
      {({ geographies }) =>
        geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
      }
    </Geographies>
  );
}
