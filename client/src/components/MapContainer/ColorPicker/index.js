import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';
import { GlobalContext } from '../../../context/GlobalState';
import './style.scss';

const ColorPicker = ({ category }) => {
  const { changeCatColor } = useContext(GlobalContext);
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
        className="circle"
        style={{ backgroundColor: category.color }}
        onClick={() => setModalVisibility(!showModal)}
      />
      {showModal ? (
        <div className="popover">
          <div className="cover" onClick={() => setModalVisibility(false)} />
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
  category: PropTypes.shape({ color: PropTypes.string.isRequired }).isRequired,
};
