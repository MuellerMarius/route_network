import React from 'react';
import PropTypes from 'prop-types';

const ResultEntry = ({ title }) => {
  return <div>{title}</div>;
};

export default ResultEntry;

ResultEntry.propTypes = {
  title: PropTypes.string.isRequired,
};
