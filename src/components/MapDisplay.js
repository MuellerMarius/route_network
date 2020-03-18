import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ComposableMap, Geographies, Geography, Line } from "react-simple-maps";

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
  const { onlyEurope, themeLight, routes } = useContext(GlobalContext);

  // TODO: Display marker for each airport
  // const markers = [
  //   ...new Set([
  //     ...new Set(routes.map(route => route.from)),
  //     ...new Set(routes.map(route => route.to))
  //   ])
  // ];

  return (
    <div className={"main-disp" + (themeLight ? "" : " dark-bg")}>
      <ComposableMap
        width={1000}
        projection="geoMercator"
        projectionConfig={onlyEurope ? projEurope : projWorld}
      >
        <Geographies
          fill={themeLight ? "#D6D6DA" : "#1A1A1A"}
          stroke={themeLight ? "#FFFFFF" : "#333333"}
          strokeWidth={0.5}
          geography={geoUrl}
        >
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {routes.map(route => (
          <Line
            key={route.id}
            from={[route.fromCoordLong, route.fromCoordLat]}
            to={[route.toCoordLong, route.toCoordLat]}
            // TODO: Stroke color according to category
            stroke={themeLight ? "#000000" : "#1A96C8"}
            strokeWidth={1}
          />
        ))}
      </ComposableMap>
    </div>
  );
}
