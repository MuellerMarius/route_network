import React from 'react';
import PropTypes from 'prop-types';
import { Line, Marker } from 'react-simple-maps';
import * as Cst from '../../../constants';

const Flight = ({ route, category, dimensions, lightTheme }) => {
  const coordinates = [
    [route.fromCoordLong, route.fromCoordLat],
    [route.toCoordLong, route.toCoordLat],
  ];

  return (
    <>
      <Line
        key={route.id}
        from={coordinates[0]}
        to={coordinates[1]}
        stroke={
          lightTheme
            ? Cst.flightColorLight[category.index]
            : Cst.flightColorDark[category.index]
        }
        strokeWidth={
          dimensions.width > Cst.screenXlWidth
            ? Cst.strokeWidthXl
            : dimensions.width > Cst.screenLgWidth
            ? Cst.strokeWidthLg
            : Cst.strokeWidthSm
        }
      />
      {coordinates.map((coord) => (
        <Marker coordinates={coord} key={`${route.id}${coord[0]}`}>
          <circle
            r={
              dimensions.width > Cst.screenXlWidth
                ? Cst.strokeWidthXl
                : dimensions.width > Cst.screenLgWidth
                ? Cst.strokeWidthLg
                : Cst.strokeWidthSm
            }
            fill={lightTheme ? Cst.markerColorLight : Cst.markerColorDark}
          />
        </Marker>
      ))}
    </>
  );
};

export default Flight;

Flight.propTypes = {
  route: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fromCoordLong: PropTypes.number.isRequired,
    fromCoordLat: PropTypes.number.isRequired,
    toCoordLong: PropTypes.number.isRequired,
    toCoordLat: PropTypes.number.isRequired,
  }).isRequired,
  category: PropTypes.shape({ index: PropTypes.number.isRequired }).isRequired,
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
  }).isRequired,
  lightTheme: PropTypes.bool.isRequired,
};
