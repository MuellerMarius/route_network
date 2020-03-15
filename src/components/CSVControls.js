import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CSVReader from "react-csv-reader";

const parseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  delimiter: ";"
};

export default function CSVControls() {
  const { loadData } = useContext(GlobalContext);

  return (
    <div className="controls">
      <h1>Data interface</h1>
      <CSVReader
        label="Import data (*.csv)"
        parserOptions={parseOptions}
        onFileLoaded={(data, fileName) => loadData(data)}
      />
      <button name="data">Export data (*.csv)</button>
    </div>
  );
}
