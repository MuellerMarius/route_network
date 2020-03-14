import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// TODO:
//  - CSV import button
//  - List element to select category
//  - dark / light mode toggle

export default function MapControls() {
  const { changeProjection, routes, onlyEurope } = useContext(GlobalContext);
  const categories = [...new Set(routes.map(item => item.cat))];
  const [euroChkd, toggleChecked] = useState(onlyEurope);

  const handleClick = e => {
    const showEU = e.target.checked;
    toggleChecked(showEU);
    changeProjection(showEU);
  };

  const createCheckbox = lbl => {
    return (
      <div className="pretty p-switch p-fill">
        <input type="checkbox" name={lbl} id={lbl} value={lbl} />
        <div className="state p-primary">
          <label>{lbl}</label>
        </div>
      </div>
    );
  };

  return (
    <div className="controls">
      <h1>Options</h1>
      <form>
        <h2>View</h2>
        <ul className="chkgrp">
          <li className="chkgrp-item">
            <div className="pretty p-switch p-fill">
              <input
                type="checkbox"
                name="onlyEurope"
                id="onlyEurope"
                value="onlyEurope"
                checked={euroChkd}
                onChange={handleClick}
              />
              <div className="state p-primary">
                <label>Focus on Europe</label>
              </div>
            </div>
          </li>
        </ul>
        <hr />
        <h2>Data</h2>
        <ul className="chkgrp">
          {categories.map(cat => (
            <li className="chkgrp-item">{createCheckbox(cat)}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}
