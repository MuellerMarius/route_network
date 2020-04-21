import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Line, Marker } from 'react-simple-maps';
import { GlobalContext } from '../../../context/GlobalState';
import * as Cst from '../../../constants';

export default function Flight(props) {
  const { windowDimensions } = useContext(GlobalContext);
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
          windowDimensions.width > Cst.screenXlWidth
            ? Cst.strokeWidthXl
            : windowDimensions.width > Cst.screenLgWidth
            ? Cst.strokeWidthLg
            : Cst.strokeWidthSm
        }
      />
      {coordinates.map((coord, index) => (
        <Marker coordinates={coord} key={index}>
          <circle
            r={
              windowDimensions.width > Cst.screenXlWidth
                ? Cst.strokeWidthXl
                : windowDimensions.width > Cst.screenLgWidth
                ? Cst.strokeWidthLg
                : Cst.strokeWidthSm
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
