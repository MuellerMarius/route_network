import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';
import { GlobalContext } from '../../../context/GlobalState';
import './style.scss';

const ColorPicker = ({ category }) => {
  const { changeCatColor, lightTheme } = useContext(GlobalContext);
  const [showModal, setModalVisibility] = useState(false);

  const onColorChange = (color) => {
    changeCatColor(
      category.name,
      `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
    );
  };

  return (
    <>
      <button
        type="button"
        className="colorpicker__circle"
        style={{
          backgroundColor: category.color,
          border: `1px solid ${
            lightTheme ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'
          }`,
        }}
        onClick={() => setModalVisibility(!showModal)}
      />
      {showModal ? (
        <div className="colorpicker__popover">
          <div
            role="button"
            className="colorpicker__cover"
            onClick={() => setModalVisibility(false)}
            onKeyPress={() => setModalVisibility(false)}
            tabIndex={0}
          />
          <ChromePicker
            color={category.color}
            onChangeComplete={onColorChange}
          />
        </div>
      ) : null}
    </>
  );
};

export default ColorPicker;

ColorPicker.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};
