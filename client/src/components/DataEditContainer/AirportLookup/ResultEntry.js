import React from 'react';
import PropTypes from 'prop-types';

const ResultEntry = ({ ident, name }) => (
  <div className="ap-lookup__result">
    <div className="ap-lookup__result__id">{ident}</div>
    <div className="ap-lookup__result__name">{name}</div>
  </div>
);

export default ResultEntry;

ResultEntry.propTypes = {
  ident: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
