import React, { useContext, useState } from 'react';
import { ComposableMap, ZoomableGroup } from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import { GlobalContext } from '../../../context/GlobalState';
import Topography from './Topography';
import Routes from './Routes';
import * as Cst from '../../../constants';

import './style.scss';

const MapView = () => {
  const { lightTheme, regionalFocus } = useContext(GlobalContext);
  const [tooltip, setTooltip] = useState('');
  const mapCenter = regionalFocus ? [20, 50] : [10, 30]; // Center Europe

  return (
    <div className={`map-area ${lightTheme ? '' : 'map-area--dark-bg'}`}>
      <ComposableMap
        width={1000}
        height={675}
        data-tip=""
        projection="geoMercator"
        projectionConfig={regionalFocus ? Cst.projRegional : Cst.projWorld}
      >
        <ZoomableGroup center={mapCenter} maxZoom={1.7}>
          <Topography />
          <Routes setTooltip={setTooltip} />
        </ZoomableGroup>
      </ComposableMap>
      <ReactTooltip>{tooltip}</ReactTooltip>
    </div>
  );
};

export default MapView;
