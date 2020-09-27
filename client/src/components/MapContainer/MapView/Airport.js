import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-simple-maps';
import * as Cst from '../../../constants';

const Airport = ({
  airport,
  dimensions,
  lightTheme,
  showLabels,
  setTooltip,
}) => (
  <Marker
    coordinates={airport.coord}
    onMouseEnter={() => setTooltip(`${airport.id}`)}
    onMouseLeave={() => setTooltip('')}
  >
    <circle r={5} fillOpacity={0} />
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

export default React.memo(Airport);

Airport.propTypes = {
  airport: PropTypes.shape({
    id: PropTypes.PropTypes.string.isRequired,
    coord: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  }).isRequired,
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
  }).isRequired,
  lightTheme: PropTypes.bool.isRequired,
  showLabels: PropTypes.bool.isRequired,
  setTooltip: PropTypes.func.isRequired,
};
