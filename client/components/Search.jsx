import React from 'react';

const Search = ({ handleSearchInputChange }) => (
  <div>
    <input
      type="submit"
      value="🔍"
    />
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => handleSearchInputChange(e.target.value)}
    />
  </div>
);

export default Search;
