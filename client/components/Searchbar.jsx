import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchLink = styled(Link)`
  margin-left: 25px;
`;

const Searchbox = styled.input`
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding: 0 50px;
`;

const Searchbar = ({ handleSearchbarChange }) => {
  const history = useHistory();
  return (
    <SearchLink to="/search">
      <Searchbox
        type="text"
        placeholder="Search"
        onChange={(e) => {
          handleSearchbarChange(e.target.value);
          history.push(`/search/${e.target.value}`);
        }}
      />
    </SearchLink>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  handleSearchbarChange: PropTypes.func.isRequired,
};
