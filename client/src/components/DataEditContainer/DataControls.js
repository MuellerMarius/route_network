import React, { useContext } from 'react';
import CSVReader from 'react-csv-reader';
import CsvDownloader from 'react-csv-downloader';
import { GlobalContext } from '../../context/GlobalState';
import * as Cst from '../../constants';

const parseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  delimiter: ',',
};

const DataControls = () => {
  const { routes, loadRoutes, clearRoutes } = useContext(GlobalContext);

  const confirmClear = (func) => {
    if (
      routes.length === 0 ||
      window.confirm('Are you sure, this will delete all existing routes?')
    ) {
      func();
    }
  };

  return (
    <div className="settings">
      <h1 className="settings__h1">Flight routes</h1>

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
        columns={Cst.csvHeader}
        datas={routes}
        text="Export data (*.csv)"
      />

      <button
        type="button"
        className="--red"
        onClick={() => confirmClear(clearRoutes)}
      >
        Clear data
      </button>
    </div>
  );
};

export default DataControls;
