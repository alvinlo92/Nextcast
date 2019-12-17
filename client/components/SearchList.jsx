import React from 'react';
import styled from 'styled-components';
import SearchListItem from './SearchListItem';

const SearchListStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SearchList = ({ podcasts, handleSearchListItemClick }) => (
  <SearchListStyled>
    {
      podcasts.length > 0
      && podcasts.map((podcast) => (
        <SearchListItem
          key={podcast.collectionId}
          podcast={podcast}
          handleSearchListItemClick={handleSearchListItemClick}
        />
      ))
    }
  </SearchListStyled>
);

export default SearchList;
