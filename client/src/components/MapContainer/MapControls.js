import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import ColorPicker from './ColorPicker';
import Checkbox from './Checkbox';

const MapControls = () => {
  const {
    lightTheme,
    regionalFocus,
    categories,
    toggleView,
    toggleTheme,
    toggleCatDisplay,
    showLabels,
    toggleLabels,
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
            />
            <Checkbox
              label="Show labels"
              name="showLabels"
              checked={showLabels}
              onChange={toggleLabels}
            />
            <Checkbox
              label="Light theme"
              name="themeLight"
              checked={lightTheme}
              onChange={toggleTheme}
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
              >
                <ColorPicker category={category} />
              </Checkbox>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MapControls;
