import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-simple-maps';
import * as Cst from '../../../constants';

const Flight = ({ route, color, dimensions }) => (
  <Line
    key={route.id}
    from={[route.fromCoordLong, route.fromCoordLat]}
    to={[route.toCoordLong, route.toCoordLat]}
    stroke={color}
    strokeWidth={
      dimensions.width > Cst.screenXlWidth
        ? Cst.strokeWidthXl
        : dimensions.width > Cst.screenLgWidth
        ? Cst.strokeWidthLg
        : Cst.strokeWidthSm
    }
  />
);

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
};
