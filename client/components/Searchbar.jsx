import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import debounce from '../utils/common-utils';
import changeSearchPage from '../actions/search';

const SearchLink = styled(Link)`
  margin-left: 25px;
`;

const SearchInput = styled.input`
  border: none;
  border-radius: 500px;
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
        // eslint-disable-next-line no-console
        .catch(console.error);
    }
  };
  const handleSearchbarChangeDebounced = debounce(handleSearchbarChange, 200);
  const history = useHistory();
  return (
    <SearchLink to="/search">
      <SearchInput
        type="text"
        placeholder="Search"
        onChange={(e) => {
          handleSearchbarChangeDebounced(e.target.value);
          history.push(`/search/${e.target.value}`);
        }}
      />
    </SearchLink>
  );
};

export default Searchbar;
