import React from 'react';
import PropTypes from 'prop-types';
import { Line, Marker } from 'react-simple-maps';
import * as Cst from '../constants';

export default function Flight(props) {
  const coordinates = [
    [props.route.fromCoordLong, props.route.fromCoordLat],
    [props.route.toCoordLong, props.route.toCoordLat],
  ];

  return (
    <React.Fragment>
      <Line
        key={props.route.id}
        from={coordinates[0]}
        to={coordinates[1]}
        stroke={
          props.lightTheme
            ? Cst.flightColorLight[props.category.index]
            : Cst.flightColorDark[props.category.index]
        }
        strokeWidth={
          window.innerWidth > Cst.screenXlWidth
            ? 0.5
            : window.innerWidth > Cst.screenLgWidth
            ? 1.5
            : 2.5
        }
      />
      {coordinates.map((coord, index) => (
        <Marker coordinates={coord} key={index}>
          <circle
            r={
              window.innerWidth > Cst.screenXlWidth
                ? 1
                : window.innerWidth > Cst.screenLgWidth
                ? 2
                : 3
            }
            fill={props.lightTheme ? Cst.markerColorLight : Cst.markerColorDark}
          />
        </Marker>
      ))}
    </React.Fragment>
  );
}

Flight.propTypes = {
  route: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  lightTheme: PropTypes.bool.isRequired,
};
