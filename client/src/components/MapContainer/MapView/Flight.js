import React from 'react';
import PropTypes from 'prop-types';
import { Line, Marker } from 'react-simple-maps';
import * as Cst from '../../../constants';

const Flight = ({ route, color, dimensions, lightTheme }) => {
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
        stroke={color}
        strokeWidth={
          dimensions.width > Cst.screenXlWidth
            ? Cst.strokeWidthXl
            : dimensions.width > Cst.screenLgWidth
            ? Cst.strokeWidthLg
            : Cst.strokeWidthSm
        }
      />
      {coordinates.map((coord, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Marker coordinates={coord} key={`${route.id}${index}`}>
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

export default React.memo(Flight);

Flight.propTypes = {
  route: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    fromCoordLong: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    fromCoordLat: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    toCoordLong: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    toCoordLat: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }).isRequired,
  color: PropTypes.string.isRequired,
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
  }).isRequired,
  lightTheme: PropTypes.bool.isRequired,
};
