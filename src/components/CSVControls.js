import React from "react";

export default function CSVControls() {
  return (
    <div className="controls">
      <h1>Data interface</h1>
      <button name="data">Import data (*.csv)</button>
      <button name="data">Export data (*.csv)</button>
    </div>
  );
}
