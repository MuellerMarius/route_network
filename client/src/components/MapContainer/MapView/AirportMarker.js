import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-simple-maps';
import * as Cst from '../../../constants';

const AirportMarker = ({
  airport,
  strokeWidth,
  lightTheme,
  showLabels,
  setTooltip,
}) => (
  <Marker
    coordinates={airport.coord}
    onMouseEnter={() => setTooltip(airport.id)}
    onMouseLeave={() => setTooltip('')}
  >
    <circle r={5} fillOpacity={0} />
    <circle
      r={strokeWidth}
      fill={lightTheme ? Cst.markerColorLight : Cst.markerColorDark}
    />
    {showLabels && (
      <text
        textAnchor="middle"
        className={`airporttext${lightTheme ? '' : '--dark'}`}
      >
        {airport.id}
      </text>
    )}
  </Marker>
);

export default React.memo(AirportMarker);

AirportMarker.propTypes = {
  airport: PropTypes.shape({
    id: PropTypes.PropTypes.string.isRequired,
    coord: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  }).isRequired,
  strokeWidth: PropTypes.number.isRequired,
  lightTheme: PropTypes.bool.isRequired,
  showLabels: PropTypes.bool.isRequired,
  setTooltip: PropTypes.func.isRequired,
};
