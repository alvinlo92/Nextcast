/* eslint-disable no-console */
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';

import { changePodcastFeed } from '../actions/podcast';

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

const SearchListItem = ({ podcast }) => {
  const dispatch = useDispatch();
  const handleSearchListItemClick = () => {
    const params = { url: podcast.feedUrl };
    axios.get('/api/podcast/feed', { params })
      .then((res) => dispatch(changePodcastFeed(res.data.rss.channel[0])))
      .catch(console.error);
  };
  return (
    <StyledSearchListItem>
      <Artwork
        src={podcast.artworkUrl600}
        onClick={() => handleSearchListItemClick()}
      />
      {podcast.collectionName.length > 25 ? <div>{`${podcast.collectionName.slice(0, 22)}...`}</div> : <div>{podcast.collectionName}</div>}
      {podcast.artistName.length > 25 ? <div>{`${podcast.artistName.slice(0, 22)}...`}</div> : <div>{podcast.artistName}</div>}
    </StyledSearchListItem>
  );
};

export default SearchListItem;

SearchListItem.propTypes = {
  podcast: PropTypes.shape({
    wrapperType: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    artistId: PropTypes.number,
    collectionId: PropTypes.number.isRequired,
    trackId: PropTypes.number.isRequired,
    artistName: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    collectionCensoredName: PropTypes.string.isRequired,
    trackCensoredName: PropTypes.string.isRequired,
    artistViewUrl: PropTypes.string,
    collectionViewUrl: PropTypes.string.isRequired,
    feedUrl: PropTypes.string,
    trackViewUrl: PropTypes.string.isRequired,
    artworkUrl30: PropTypes.string.isRequired,
    artworkUrl60: PropTypes.string.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    collectionPrice: PropTypes.number.isRequired,
    trackPrice: PropTypes.number.isRequired,
    trackRentalPrice: PropTypes.number.isRequired,
    collectionHdPrice: PropTypes.number.isRequired,
    trackHdPrice: PropTypes.number.isRequired,
    trackHdRentalPrice: PropTypes.number.isRequired,
    releaseDate: PropTypes.string.isRequired,
    collectionExplicitness: PropTypes.string.isRequired,
    trackExplicitness: PropTypes.string.isRequired,
    trackCount: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    primaryGenreName: PropTypes.string.isRequired,
    artworkUrl600: PropTypes.string.isRequired,
  }).isRequired,
};
