import React, { Component } from 'react';
import styled from 'styled-components';

const SearchListItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  margin: 10px;
`;

const SearchListItemArtwork = styled.img`
  width: 100%;
`;

const SearchListItem = ({ podcast, handleSearchListItemClick }) => {
  <SearchListItemStyled>
    {/* <SearchListItemArtwork src={podcast.artworkUrl600} onClick={() => this.handleClick()} />
    {podcast.collectionName.length > 25 ? <div>{`${podcast.collectionName.slice(0, 22)}...`}</div> : <div>{podcast.collectionName}</div>}
    {podcast.artistName.length > 25 ? <div>{`${podcast.artistName.slice(0, 22)}...`}</div> : <div>{podcast.artistName}</div>} */}
  </SearchListItemStyled>
};

export default SearchListItem;
