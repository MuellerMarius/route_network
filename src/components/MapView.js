import React, { useContext } from "react";
import PropTypes from "prop-types";

import { GlobalContext } from "../context/GlobalState";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Flight from "./Flight";
import * as Constants from "../constants";

export default function MapView(props) {
  const { routes } = useContext(GlobalContext);

  return (
    <div className={"main-disp" + (props.themeLight ? "" : " dark-bg")}>
      <ComposableMap
        width={1000}
        projection="geoMercator"
        projectionConfig={
          props.onlyEurope ? Constants.projEurope : Constants.projWorld
        }
      >
        <Geographies
          fill={props.themeLight ? "#D6D6DA" : "#1A1A1A"}
          stroke={props.themeLight ? "#FFFFFF" : "#333333"}
          strokeWidth={0.5}
          geography={Constants.geoUrl}
        >
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {routes
          .filter(route => {
            // only show routes of the active categories
            let category = props.categories.find(
              category => category.name === route.cat
            );

            if (category && category.active) {
              return true;
            } else {
              return false;
            }
          })
          .map(route => {
            return (
              <Flight
                key={route.id}
                route={route}
                themeLight={props.themeLight}
              />
            );
          })}
        })}
      </ComposableMap>
    </div>
  );
}

MapView.propTypes = {
  themeLight: PropTypes.bool.isRequired,
  onlyEurope: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired
};
