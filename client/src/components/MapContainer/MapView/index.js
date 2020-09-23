import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ComposableMap, ZoomableGroup } from 'react-simple-maps';
import { GlobalContext } from '../../../context/GlobalState';
import Topography from './Topography';
import Routes from './Routes';
import * as Cst from '../../../constants';

import './style.scss';

const MapView = ({ dimensions }) => {
  const { lightTheme, regionalFocus } = useContext(GlobalContext);
  const mapCenter = regionalFocus ? [20, 50] : [10, 30]; // Values to center Europe

  return (
    <div className={`map-area ${lightTheme ? '' : 'map-area--dark-bg'}`}>
      <ComposableMap
        width={1000}
        height={675}
        projection="geoMercator"
        projectionConfig={regionalFocus ? Cst.projRegional : Cst.projWorld}
      >
        <ZoomableGroup center={mapCenter} maxZoom={1.7}>
          <Topography dimensions={dimensions} />
          <Routes dimensions={dimensions} />
        </ZoomableGroup>
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
