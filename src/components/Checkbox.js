import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox(props) {
  return (
    <li key={props.name} className="settings__chkgrp-item">
      <div className="pretty p-switch p-fill">
        <input
          type="checkbox"
          name={props.name}
          checked={props.checked}
          onChange={() => props.onChange(!props.checked)}
        />
        <div className="state p-primary">
          <label>{props.label}</label>
        </div>
      </div>
    </li>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  category: PropTypes.bool,
  checked: PropTypes.bool,
  label: PropTypes.string,
};
