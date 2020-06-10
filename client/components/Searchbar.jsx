/* eslint-disable no-console */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import changeSearchPage from '../actions/searchPage';

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

const Searchbar = () => {
  const dispatch = useDispatch();
  const handleSearchbarChange = (search) => {
    const url = search.toLowerCase().split(' ').join('+');
    if (url === '') {
      dispatch(changeSearchPage([]));
    } else {
      axios.get(`/api/search/${url}`)
        .then((res) => dispatch(changeSearchPage(res.data)))
        .catch(console.error);
    }
  };
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
