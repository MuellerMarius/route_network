import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../context/GlobalState";
import MapView from "./MapView";
import Checkbox from "./Checkbox";

export default function MapControls(props) {
  const [categories, setCategories] = useState([]);
  const { routes } = useContext(GlobalContext);

  useEffect(() => {
    // Filter each category
    let categorySet = [...new Set(routes.map(item => item.cat))];
    categorySet.forEach(entry => {
      setCategories(oldCategories => [
        ...oldCategories,
        { name: entry, active: true }
      ]);
    });
  }, [routes]);

  const onCategoryChange = name => checked => {
    setCategories(oldCategories =>
      oldCategories.map(oldCategory =>
        oldCategory.name === name ? { name, active: checked } : oldCategory
      )
    );
  };

  return (
    <React.Fragment>
      <div className="controls">
        <h1>Options</h1>
        <form>
          <h2>View</h2>
          <ul className="chkgrp">
            <Checkbox
              label="Focus on Europe"
              name="onlyEurope"
              checked={props.onlyEurope}
              onChange={props.viewChanger}
              projection
            />
            <Checkbox
              label="Light Theme"
              name="themeLight"
              checked={props.themeLight}
              onChange={props.themeChanger}
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
                onChange={onCategoryChange(category.name)}
              />
            ))}
          </ul>
        </form>
      </div>
      <MapView
        themeLight={props.themeLight}
        onlyEurope={props.onlyEurope}
        categories={categories}
      />
    </React.Fragment>
  );
}

MapControls.propTypes = {
  onlyEurope: PropTypes.bool.isRequired,
  themeLight: PropTypes.bool.isRequired,
  themeChanger: PropTypes.func.isRequired,
  viewChanger: PropTypes.func.isRequired
};
