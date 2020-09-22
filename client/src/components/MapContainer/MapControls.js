import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Checkbox from './Checkbox';

const MapControls = () => {
  const {
    lightTheme,
    regionalFocus,
    categories,
    toggleView,
    toggleTheme,
    toggleCatDisplay,
  } = useContext(GlobalContext);

  const onChange = (name) => (checked) => {
    toggleCatDisplay(name, checked);
  };

  return (
    <div className={`settings ${lightTheme ? '' : ' settings--dark'}`}>
      <h1 className="settings__h1">Options</h1>
      <div className="settings__wrapper">
        <div className="settings_section">
          <h2 className="settings__h2">View</h2>
          <ul className="settings__chkgrp">
            <Checkbox
              label="Regional focus"
              name="regionalFocus"
              checked={regionalFocus}
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
        </div>

        <hr className="settings__seperator" />
        <div className="settings_section">
          <h2 className="settings__h2">Data</h2>
          <ul className="settings__chkgrp">
            {categories.map((category) => (
              <Checkbox
                key={category.name}
                label={category.name}
                name={category.name}
                checked={category.active}
                onChange={onChange(category.name)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MapControls;
