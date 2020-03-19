import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker
} from "react-simple-maps";
import * as Constants from "../constants";

export default function MapDisplay() {
  const { onlyEurope, themeLight, routes } = useContext(GlobalContext);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const markerNames = [
      ...new Set([
        ...new Set(routes.map(route => route.from)),
        ...new Set(routes.map(route => route.to))
      ])
    ];

    markerNames.forEach(name => {
      let coordinates = routes.find(route => route.from === name);
      if (coordinates) {
        setMarkers(markers => [
          ...markers,
          {
            name,
            lat: coordinates.fromCoordLat,
            long: coordinates.fromCoordLong
          }
        ]);
      } else {
        coordinates = routes.find(route => route.to === name);
        setMarkers(markers => [
          ...markers,
          {
            name,
            lat: coordinates.toCoordLat,
            long: coordinates.toCoordLong
          }
        ]);
      }
    });
  }, [routes]);

  return (
    <div className={"main-disp" + (themeLight ? "" : " dark-bg")}>
      <ComposableMap
        width={1000}
        projection="geoMercator"
        projectionConfig={
          onlyEurope ? Constants.projEurope : Constants.projWorld
        }
      >
        <Geographies
          fill={themeLight ? "#D6D6DA" : "#1A1A1A"}
          stroke={themeLight ? "#FFFFFF" : "#333333"}
          strokeWidth={0.5}
          geography={Constants.geoUrl}
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
        {markers.map(marker => {
          let coordinates = [marker.long, marker.lat];
          return (
            <Marker key={marker.name} coordinates={coordinates}>
              <circle r={2} fill="#F53" />
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
}
