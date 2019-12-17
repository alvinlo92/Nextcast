import React from 'react';
import styled from 'styled-components';
import SearchListItem from './SearchListItem';

const SearchListCSS = styled.div`
  position: fixed;
  top: 0;
  left: 230px;
  right: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SearchList = ({ page, podcasts, handleSearchListItemClick }) => (
  <SearchListCSS>
    {
      podcasts.length > 0
      && page === 'search'
      && podcasts.map((podcast) => (
        <SearchListItem
          key={podcast.collectionId}
          podcast={podcast}
          handleSearchListItemClick={handleSearchListItemClick}
          page={podcast.collectionName}
        />
      ))
    }
  </SearchListCSS>
);

export default SearchList;
