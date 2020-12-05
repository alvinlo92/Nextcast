/* eslint-disable no-console */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';

import { changePodcast, changePodcastFeed } from '../actions/podcast';

const StyledTopChartsItems = styled(Link)`
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

const TopChartsItem = ({ podcast, index }) => {
  const dispatch = useDispatch();
  const handleTopChartsItemClick = () => {
    const { id } = podcast;
    axios.get(`/api/podcast/${id}`)
      .then((res) => {
        dispatch(changePodcast(res.data));
        const params = { url: res.data.feedUrl };
        return axios.get(`/api/podcast/${id}/rss`, { params });
      })
      .then((res) => dispatch(changePodcastFeed(res.data.rss.channel)))
      .catch(console.error);
  };
  return (
    <StyledTopChartsItems
      to="/podcast"
      onClick={() => handleTopChartsItemClick()}
    >
      <Artwork src={podcast.artworkUrl100} alt="" />
      <div>{index + 1}</div>
      <Name>{podcast.name}</Name>
      <ArtistName>{podcast.artistName}</ArtistName>
    </StyledTopChartsItems>
  );
};

export default TopChartsItem;

TopChartsItem.propTypes = {
  podcast: PropTypes.shape({
    artistId: PropTypes.string,
    artistName: PropTypes.string.isRequired,
    artistUrl: PropTypes.string,
    artworkUrl100: PropTypes.string.isRequired,
    copyright: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({
      genreId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })),
    id: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
