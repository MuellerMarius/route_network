import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const projEurope = {
  rotate: [-20.0, -52.0, 0],
  scale: 700
};

const projWorld = {
  center: [0, 30],
  scale: 155,
  rotate: [0.0, -0.1, 0]
};

export default function MapDisplay() {
  const { onlyEurope } = useContext(GlobalContext);

  return (
    <div className="main-disp">
      <ComposableMap
        width={1000}
        projection="geoMercator"
        projectionConfig={onlyEurope ? projEurope : projWorld}
      >
        <Geographies
          fill="#D6D6DA"
          stroke="#FFFFFF"
          strokeWidth={0.5}
          geography={geoUrl}
        >
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
