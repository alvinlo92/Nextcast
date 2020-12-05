import React from 'react';
import styled from 'styled-components';

const Artwork = styled.img`
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
    <EpisodeDescription dangerouslySetInnerHTML={{ __html: episode.description }} />
    <div>
      <audio controls>
        {/* <source src={episode.enclosure.$.url} /> */}
      </audio>
    </div>
    <hr />
  </div>
);

export default PodcastList;
