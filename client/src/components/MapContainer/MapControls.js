import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import ColorPicker from './ColorPicker';
import Checkbox from './Checkbox';
import * as actionType from '../../context/actions';

const MapControls = () => {
  const {
    lightTheme,
    regionalFocus,
    categories,
    showLabels,
    dispatch,
  } = useContext(GlobalContext);

  const toggleViewSetting = (type, name) => (checked) => {
    dispatch({
      type,
      data:
        type === actionType.TOGGLE_CAT_DISPLAY ? { name, checked } : checked,
    });
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
              onChange={toggleViewSetting(actionType.TOGGLE_VIEW)}
            />
            <Checkbox
              label="Show labels"
              name="showLabels"
              checked={showLabels}
              onChange={toggleViewSetting(actionType.TOGGLE_LABELS)}
            />
            <Checkbox
              label="Light theme"
              name="themeLight"
              checked={lightTheme}
              onChange={toggleViewSetting(actionType.TOGGLE_THEME)}
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
                onChange={toggleViewSetting(
                  actionType.TOGGLE_CAT_DISPLAY,
                  category.name,
                )}
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
