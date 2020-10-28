import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import SearchListItem from './SearchListItem';

const StyledSearchPage = styled.div`
  position: absolute;
  top: 65px;
  left: 250px;
  right: 25px;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill,minmax(190px,1fr));
`;

const SearchPage = () => {
  const podcasts = useSelector((state) => state.searchResults);
  return (
    <StyledSearchPage>
      {podcasts.length > 0 && podcasts.map((podcast) => (
        <SearchListItem
          key={podcast.collectionId}
          podcast={podcast}
          page={podcast.collectionName}
        />
      ))}
    </StyledSearchPage>
  );
};

export default SearchPage;
