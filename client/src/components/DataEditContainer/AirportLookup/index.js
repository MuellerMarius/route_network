import React, { useState } from 'react';
import ResultEntry from './ResultEntry';
import './style.scss';

const AirportLookup = () => {
  // const [searchString, setSearchString] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setResults(['Test1', 'Test2']);
  };

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
        />
      </div>
      <div className="ap-lookup__results">
        {results.map((result) => (
          <ResultEntry title={result} />
        ))}
      </div>
    </>
  );
};

export default AirportLookup;
