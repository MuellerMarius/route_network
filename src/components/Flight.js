import React from "react";
import PropTypes from "prop-types";
import { Line, Marker } from "react-simple-maps";
import * as Constants from "../constants";

export default function Flight(props) {
  const coordinates = [
    [props.route.fromCoordLong, props.route.fromCoordLat],
    [props.route.toCoordLong, props.route.toCoordLat]
  ];

  return (
    <React.Fragment>
      <Line
        key={props.route.id}
        from={coordinates[0]}
        to={coordinates[1]}
        stroke={
          props.lightTheme
            ? Constants.flightColorLight[props.category.index]
            : Constants.flightColorDark[props.category.index]
        }
        strokeWidth={0.5}
      />
      {coordinates.map((coord, index) => (
        <Marker coordinates={coord} key={index}>
          <circle
            r={1}
            fill={
              props.lightTheme
                ? Constants.markerColorLight
                : Constants.markerColorDark
            }
          />
        </Marker>
      ))}
    </React.Fragment>
  );
}

Flight.propTypes = {
  route: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  lightTheme: PropTypes.bool.isRequired
};
