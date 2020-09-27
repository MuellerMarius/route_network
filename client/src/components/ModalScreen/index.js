import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ModalScreen = ({ title, isVisible, onClose: closeModal, children }) => {
  if (!isVisible) {
    return null;
  }
  return (
    <>
      <div className="modal__cover" onClick={closeModal} />
      <div className="modal">
        {title ? (
          <>
            <h2 className="modal__header">Modal Window</h2>
            <hr className="modal__seperator" />
          </>
        ) : null}
        <div className="modal__content">{children}</div>
      </div>
    </>
  );
};

export default ModalScreen;

ModalScreen.propTypes = {
  title: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
};

ModalScreen.defaultProps = { title: null };
