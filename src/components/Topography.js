import React, { useContext } from "react";
import { Geographies, Geography } from "react-simple-maps";
import { MapViewContext } from "../context/MapViewState";
import * as Constants from "../constants";

export default function Topography() {
  const { lightTheme } = useContext(MapViewContext);
  return (
    <Geographies
      fill={lightTheme ? Constants.geoColorLight : Constants.geoColorDark}
      stroke={
        lightTheme
          ? Constants.geoStrokeColorLight
          : Constants.geoStrokeColorDark
      }
      strokeWidth={0.5}
      geography={Constants.geoUrl}
    >
      {({ geographies }) =>
        geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
      }
    </Geographies>
  );
}
