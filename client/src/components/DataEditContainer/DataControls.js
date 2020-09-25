import React, { useContext, useState } from 'react';
import CSVReader from 'react-csv-reader';
import CsvDownloader from 'react-csv-downloader'; // eslint-disable-line import/no-unresolved
import { GlobalContext } from '../../context/GlobalState';
import AirportLookup from './AirportLookup';
import ModalScreen from '../ModalScreen';
import * as Cst from '../../constants';

const parseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  delimiter: ',',
};

const DataControls = () => {
  const { routes, loadRoutes, clearRoutes } = useContext(GlobalContext);
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

      <button type="button" onClick={() => setShowAirportLookup(true)}>
        Lookup airport
      </button>

      <ModalScreen
        isVisible={showAirportLookup}
        onClose={() => setShowAirportLookup(false)}
      >
        <AirportLookup />
      </ModalScreen>

      <hr className="settings__seperator" />

      <button
        type="button"
        onClick={() => confirmClear(() => loadRoutes(Cst.sampleRoutes))}
      >
        Load sample data
      </button>
      <CSVReader
        label="Import data (*.csv)"
        parserOptions={parseOptions}
        onFileLoaded={(data) => loadRoutes(data)}
      />

      <CsvDownloader
        filename="data"
        separator=","
        className=".button"
        columns={Cst.csvHeader}
        datas={routes}
        text="Export data (*.csv)"
      />

      <button
        type="button"
        className="button --red"
        onClick={() => confirmClear(clearRoutes)}
      >
        Clear data
      </button>
    </div>
  );
};

export default DataControls;
