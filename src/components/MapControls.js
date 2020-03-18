import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function MapControls() {
  const {
    changeProjection,
    changeTheme,
    routes,
    onlyEurope,
    themeLight
  } = useContext(GlobalContext);
  const categories = [...new Set(routes.map(item => item.cat))];
  const [euroChkd, toggleProjectionChecked] = useState(onlyEurope);
  const [themeLgtChkd, toggleThemeChecked] = useState(themeLight);

  const handleClick = e => {
    switch (e.target.name) {
      case "onlyEurope":
        toggleProjectionChecked(e.target.checked);
        changeProjection(e.target.checked);
        break;
      case "themeLight":
        toggleThemeChecked(e.target.checked);
        changeTheme(e.target.checked);
        break;
      default:
        return;
    }
  };

  const createCheckbox = (lbl, name, chkd) => {
    return (
      <li key={name} className="chkgrp-item">
        <div className="pretty p-switch p-fill">
          <input
            type="checkbox"
            name={name}
            checked={chkd}
            onChange={handleClick}
          />
          <div className="state p-primary">
            <label>{lbl}</label>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div className="controls">
      <h1>Options</h1>
      <form>
        <h2>View</h2>
        <ul className="chkgrp">
          {createCheckbox("Focus on Europe", "onlyEurope", euroChkd)}
          {createCheckbox("Light Theme", "themeLight", themeLgtChkd)}
        </ul>
        <hr />
        <h2>Data</h2>
        <ul className="chkgrp">
          {categories.map(cat => {
            // TODO: add function to filter categories
            return createCheckbox(cat, cat, false);
          })}
        </ul>
      </form>
    </div>
  );
}
