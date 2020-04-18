import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import CSVReader from 'react-csv-reader';
import CsvDownloader from 'react-csv-downloader';
import * as Cst from '../constants';

const parseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  delimiter: ',',
};

export default function CSVControls() {
  const { routes, loadRoutes } = useContext(GlobalContext);

  return (
    <div className="settings">
      <h1 className="settings__h1">Flight routes</h1>

      <button
        className="--color-green"
        onClick={() => loadRoutes(Cst.sampleRoutes)}
      >
        Load sample data
      </button>
      <CSVReader
        label="Import data (*.csv)"
        parserOptions={parseOptions}
        onFileLoaded={(data, fileName) => loadRoutes(data)}
      />

      <CsvDownloader
        filename="data"
        separator=","
        columns={Cst.csvHeader}
        datas={routes}
        text="Export data (*.csv)"
      />
    </div>
  );
}
