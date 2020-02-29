import React from 'react';
import styled from 'styled-components';
import SearchListItem from './SearchListItem';

const StyledSearchPage = styled.div`
  position: fixed;
  top: 0;
  left: 230px;
  right: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SearchPage = ({ podcasts, handleSearchListItemClick }) => (
  <StyledSearchPage>
    {podcasts.length > 0 && podcasts.map((podcast) => (
      <SearchListItem
        key={podcast.collectionId}
        podcast={podcast}
        handleSearchListItemClick={handleSearchListItemClick}
        page={podcast.collectionName}
      />
    ))}
  </StyledSearchPage>
);

export default SearchPage;
