import React from 'react';
import styled from 'styled-components';

const StyledSearch = styled.div`
  position: fixed;
  top: 0;
  left: 230px;
  right: 0;
`;

const Search = ({ handlePageClick, handleSearchInputChange }) => (
  <StyledSearch>
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => handleSearchInputChange(e.target.value)}
      className="search"
      onClick={(e) => handlePageClick(e.target.className)}
    />
  </StyledSearch>
);

export default Search;
