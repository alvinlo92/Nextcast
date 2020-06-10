import React from 'react';
import PropTypes from 'prop-types';

const TopChartsItems = ({ podcast }) => (
  <div>
    <img src={podcast.artworkUrl100} alt="" />
  </div>
);

export default TopChartsItems;

TopChartsItems.propTypes = {
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
