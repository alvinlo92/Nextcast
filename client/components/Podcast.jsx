import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import PodcastList from './PodcastList';

const StyledPodcast = styled.div`
  position: absolute;
  top: 65px;
  left: 250px;
  right: 25px;
  display: flex;
`;

const ArtworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 40px;
`;

const Artwork = styled.img`
  width: 300px;
`;

const Podcast = () => {
  const podcast = useSelector((state) => state.podcast.podcast);
  const feed = useSelector((state) => state.podcast.feed);
  return (
    Object.keys(feed).length > 0 && (
      <StyledPodcast>
        <ArtworkContainer>
          <Artwork src={podcast.artworkUrl600} />
        </ArtworkContainer>
        <div>
          <div>{podcast.collectionName}</div>
          <div>{podcast.artistName}</div>
          <br />
          Description
          <div>{feed.description}</div>
        </div>
        <div>
          {feed.item.map((episode, i) => <PodcastList key={i} episode={episode} />)}
        </div>
      </StyledPodcast>
    )
  );
};

export default Podcast;
