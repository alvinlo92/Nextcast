/* eslint-disable no-console */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';

import { changePodcast, changePodcastFeed } from '../actions/podcast';

const StyledTopChartsItems = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 10px;
`;

const Artwork = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
`;

const TopChartsItem = ({ podcast }) => {
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
      {podcast.name.length > 22 ? <div>{`${podcast.name.slice(0, 20)}...`}</div> : <div>{podcast.name}</div>}
      {podcast.artistName.length > 22 ? <div>{`${podcast.artistName.slice(0, 20)}...`}</div> : <div>{podcast.artistName}</div>}
    </StyledTopChartsItems>
  );
}

export default TopChartsItem;

TopChartsItem.propTypes = {
  podcast: PropTypes.shape({
    artistId: PropTypes.string,
    artistName: PropTypes.string.isRequired,
    artistUrl: PropTypes.string,
    artworkUrl100: PropTypes.string.isRequired,
    copyright: PropTypes.string,
    genres: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
