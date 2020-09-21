import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ComposableMap } from 'react-simple-maps';
import { GlobalContext } from '../../../context/GlobalState';
import Topography from './Topography';
import Routes from './Routes';
import * as Cst from '../../../constants';

import './style.scss';

const MapView = ({ dimensions }) => {
  const { lightTheme, focusViewOnEurope } = useContext(GlobalContext);

  return (
    <div className={`map-area ${lightTheme ? '' : 'map-area--dark-bg'}`}>
      <ComposableMap
        width={1000}
        projection="geoMercator"
        projectionConfig={focusViewOnEurope ? Cst.projEurope : Cst.projWorld}
      >
        <Topography dimensions={dimensions} />
        <Routes dimensions={dimensions} />
      </ComposableMap>
    </div>
  );
};

export default MapView;

MapView.propTypes = {
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
  }).isRequired,
};
