import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Geographies, Geography } from 'react-simple-maps';
import { GlobalContext } from '../../../context/GlobalState';
import * as Cst from '../../../constants';

const Topography = ({ dimensions }) => {
  const { lightTheme } = useContext(GlobalContext);

  return (
    <Geographies
      fill={lightTheme ? Cst.geoColorLight : Cst.geoColorDark}
      stroke={lightTheme ? Cst.geoStrokeColorLight : Cst.geoStrokeColorDark}
      strokeWidth={0.5}
      geography={
        dimensions.width < Cst.screenLgWidth ? Cst.geoUrlSm : Cst.geoUrlLg
      }
    >
      {({ geographies }) =>
        geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
      }
    </Geographies>
  );
};

export default Topography;

Topography.propTypes = {
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
  }).isRequired,
};
