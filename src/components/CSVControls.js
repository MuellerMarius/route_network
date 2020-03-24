import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CSVReader from "react-csv-reader";
import CsvDownloader from "react-csv-downloader";
import * as Constants from "../constants";

const parseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  delimiter: ","
};

export default function CSVControls() {
  const { routes, loadRoutes } = useContext(GlobalContext);

  return (
    <div className="controls">
      <h1>Data interface</h1>

      <CSVReader
        label="Import data (*.csv)"
        parserOptions={parseOptions}
        onFileLoaded={(data, fileName) => loadRoutes(data)}
      />

      <CsvDownloader
        className="tes"
        filename="data"
        separator=","
        columns={Constants.csvHeader}
        datas={routes}
        text="Export data (*.csv)"
      />
    </div>
  );
}
