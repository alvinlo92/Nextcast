import React from 'react';
import styled from 'styled-components';

const StyledSearch = styled.div`
  margin-left: 25px;
`;

const SearchBox = styled.input`
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding: 0 50px;
`;

const Search = ({ handlePageClick, handleSearchInputChange }) => (
  <StyledSearch>
    <SearchBox
      type="text"
      placeholder="Search"
      onChange={(e) => handleSearchInputChange(e.target.value)}
      className="search"
      onClick={(e) => handlePageClick(e.target.className)}
    />
  </StyledSearch>
);

export default Search;
