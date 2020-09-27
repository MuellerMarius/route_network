import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ResultEntry from './ResultEntry';
import * as Cst from '../../../constants';
import './style.scss';

const AirportLookup = ({ closeModal }) => {
  const [searchString, setSearchString] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  const handleKeyDown = (e) => {
    switch (e.keyCode) {
      case Cst.ESCAPE:
        closeModal();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchString) {
        fetch(`${Cst.autoCompleteAPI}${searchString}`)
          .then((res) => res.json())
          .then((data) => setResults(data));
      } else {
        setResults([]);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchString]);

  return (
    <>
      <div className="ap-lookup__search">
        <span className="material-icons">search</span>
        <input
          autoFocus
          type="text"
          placeholder="Search for an airport..."
          autoComplete="off"
          className="ap-lookup__search__input"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="ap-lookup__results">
        {results.map((result) => (
          <ResultEntry
            key={result.ident}
            ident={result.ident}
            name={result.name}
          />
        ))}
      </div>
    </>
  );
};

export default AirportLookup;

AirportLookup.propTypes = { closeModal: PropTypes.func.isRequired };
