import React from 'react';
import styled from 'styled-components';

const StyledSearchListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  margin: 10px;
`;

const Artwork = styled.img`
  width: 100%;
`;

const SearchListItem = ({ podcast, handleSearchListItemClick }) => (
  <StyledSearchListItem>
    <Artwork
      src={podcast.artworkUrl600}
      onClick={() => handleSearchListItemClick(podcast)}
    />
    {podcast.collectionName.length > 25 ? <div>{`${podcast.collectionName.slice(0, 22)}...`}</div> : <div>{podcast.collectionName}</div>}
    {podcast.artistName.length > 25 ? <div>{`${podcast.artistName.slice(0, 22)}...`}</div> : <div>{podcast.artistName}</div>}
  </StyledSearchListItem>
);

export default SearchListItem;
