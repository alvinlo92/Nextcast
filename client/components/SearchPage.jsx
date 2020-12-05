import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import SearchListItem from './SearchListItem';

const StyledSearchPage = styled.div`
  position: absolute;
  top: 65px;
  left: 250px;
  right: 25px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
`;

const Cards = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill,minmax(190px,1fr));
`;

const SearchPage = () => {
  const results = useSelector((state) => state.search);
  return (
    <StyledSearchPage>
      {results.length > 0 && <Title>Search Results</Title>}
      <Cards>
        {results.map((podcast) => (
          <SearchListItem
            key={podcast.collectionId}
            podcast={podcast}
            page={podcast.collectionName}
          />
        ))}
      </Cards>
    </StyledSearchPage>
  );
};

export default SearchPage;
