/* eslint-disable no-console */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';

import { changePodcast, changePodcastFeed } from '../actions/podcast';

const StyledSearchListItem = styled(Link)`
  width: 200px;
  margin: 10px;
  text-decoration: none;
  color: rgb(255, 255, 255);
`;

const Artwork = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
`;

const Name = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ArtistName = styled.div`
  color: grey;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const SearchListItem = ({ podcast }) => {
  const dispatch = useDispatch();
  const handleSearchListItemClick = () => {
    dispatch(changePodcast(podcast));
    const { id } = podcast;
    const params = { url: podcast.feedUrl };
    axios.get(`/api/podcast/${id}/rss`, { params })
      .then((res) => dispatch(changePodcastFeed(res.data.rss.channel)))
      .catch(console.error);
  };
  return (
    <StyledSearchListItem
      to="/podcast"
      onClick={() => handleSearchListItemClick()}
    >
      <Artwork src={podcast.artworkUrl600} />
      <Name>{podcast.collectionName}</Name>
      <ArtistName>{podcast.artistName}</ArtistName>
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
