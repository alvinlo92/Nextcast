import React from 'react';
import styled from 'styled-components';

const Artwork = styled.div`
  width: 120px;
`;

const EpisodeTitle = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
`;

const EpisodeDescription = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

const PodcastList = ({ episode }) => (
  <div>
    <EpisodeTitle>{episode.title}</EpisodeTitle>
    <EpisodeDescription>{episode['itunes:summary']}</EpisodeDescription>
      <div>
        <audio controls>
          <source src={episode.enclosure.$.url} />
        </audio>
      </div>
    <hr />
  </div>
);

export default PodcastList;
