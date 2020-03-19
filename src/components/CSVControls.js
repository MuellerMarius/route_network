import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CSVReader from "react-csv-reader";
import CsvDownloader from "react-csv-downloader";

// Options for CSV data import parsing
const parseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  delimiter: ","
};

const csvHeader = [
  {
    id: "id"
  },
  {
    id: "from"
  },
  {
    id: "fromCoordLat"
  },
  {
    id: "fromCoordLong"
  },
  {
    id: "to"
  },
  {
    id: "toCoordLat"
  },
  {
    id: "toCoordLong"
  },
  {
    id: "cat"
  }
];

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
        columns={csvHeader}
        datas={routes}
        text="Export data (*.csv)"
      />
    </div>
  );
}
