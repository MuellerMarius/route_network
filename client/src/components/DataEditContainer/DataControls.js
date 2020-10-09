import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CSVReader from 'react-csv-reader';
import CsvDownloader from 'react-csv-downloader'; // eslint-disable-line import/no-unresolved
import useGlobalContext from '../../context/GlobalState';
import AirportLookup from './AirportLookup';
import ModalScreen from '../ModalScreen';
import * as Cst from '../../constants';
import * as actionType from '../../context/actions';

const DataControls = ({ addActionRef }) => {
  const { routes, dispatch } = useGlobalContext();
  const [showAirportLookup, setShowAirportLookup] = useState(false);

  const confirmClear = (func) => {
    if (
      routes.length === 0 ||
      window.confirm('Are you sure, this will delete all existing routes?')
    ) {
      func();
    }
  };

  return (
    <div className="sidemenu settings ">
      <h1 className="settings__h1">Flight routes</h1>

      <button type="button" onClick={() => addActionRef.current.click()}>
        <span className="material-icons sidemenu__icon">add</span>
        Add new route
      </button>

      <button type="button" onClick={() => setShowAirportLookup(true)}>
        <span className="material-icons sidemenu__icon">search</span>
        Lookup airport
      </button>

      <ModalScreen
        isVisible={showAirportLookup}
        onClose={() => setShowAirportLookup(false)}
      >
        <AirportLookup closeModal={() => setShowAirportLookup(false)} />
      </ModalScreen>

      <hr className="settings__seperator" />

      <button
        type="button"
        onClick={() =>
          confirmClear(() =>
            dispatch({
              type: actionType.LOAD_ROUTES,
              data: Cst.sampleRoutes,
            }),
          )
        }
      >
        <span className="material-icons sidemenu__icon">flight_takeoff</span>
        Load sample data
      </button>

      <CSVReader
        label={
          <>
            <span className="material-icons sidemenu__icon">arrow_upward</span>
            Import data (*.csv)
          </>
        }
        parserOptions={Cst.parseOptions}
        onFileLoaded={(data) =>
          confirmClear(() => {
            dispatch({
              type: actionType.LOAD_ROUTES,
              data,
            });
          })
        }
      />

      <CsvDownloader
        filename="data"
        separator=","
        className=".button"
        columns={Cst.csvHeader}
        datas={routes}
      >
        <button type="button">
          <span className="material-icons sidemenu__icon">arrow_downward</span>
          Export data (*.csv)
        </button>
      </CsvDownloader>

      <button
        type="button"
        className="button --red"
        onClick={() =>
          confirmClear(() => {
            dispatch({
              type: actionType.CLEAR_ROUTES,
            });
          })
        }
      >
        <span className="material-icons sidemenu__icon">clear</span>
        Clear data
      </button>
    </div>
  );
};

export default DataControls;

DataControls.propTypes = {
  addActionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
