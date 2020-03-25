import React, { useContext, useEffect } from "react";
import { MapViewContext } from "../context/MapViewState";
import { GlobalContext } from "../context/GlobalState";
import Checkbox from "./Checkbox";

export default function MapControls() {
  const { routes } = useContext(GlobalContext);

  const {
    lightTheme,
    focusViewOnEurope,
    initCategories,
    categories,
    toggleView,
    toggleTheme,
    toggleCatDisplay
  } = useContext(MapViewContext);

  useEffect(() => {
    initCategories(routes);
  }, [routes, initCategories]);

  const onChange = name => checked => {
    toggleCatDisplay(name, checked);
  };

  return (
    <div className="controls">
      <h1>Options</h1>
      <form>
        <h2>View</h2>
        <ul className="chkgrp">
          <Checkbox
            label="Focus on Europe"
            name="onlyEurope"
            checked={focusViewOnEurope}
            onChange={toggleView}
            projection
          />
          <Checkbox
            label="Light Theme"
            name="themeLight"
            checked={lightTheme}
            onChange={toggleTheme}
            theme
          />
        </ul>
        <hr />
        <h2>Data</h2>
        <ul className="chkgrp">
          {categories.map(category => (
            <Checkbox
              key={category.name}
              label={category.name}
              name={category.name}
              checked={category.active}
              onChange={onChange(category.name)}
            />
          ))}
        </ul>
      </form>
    </div>
  );
}
