import React from 'react';
import { Geographies, Geography } from 'react-simple-maps';
import useGlobalContext from '../../../context/GlobalState';
import useMedia from '../../../util/useMedia';
import * as Cst from '../../../constants';

const Topography = () => {
  const isLgScreen = useMedia(`(min-width: ${Cst.screenLgWidth}px)`);
  const geography = isLgScreen ? Cst.geoUrlLg : Cst.geoUrlSm;
  const { lightTheme } = useGlobalContext();

  return (
    <Geographies
      fill={lightTheme ? Cst.geoColorLight : Cst.geoColorDark}
      stroke={lightTheme ? Cst.geoStrokeColorLight : Cst.geoStrokeColorDark}
      strokeWidth={0.5}
      geography={geography}
    >
      {({ geographies }) =>
        geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
      }
    </Geographies>
  );
};

export default Topography;
