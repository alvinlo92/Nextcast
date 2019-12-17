import React from 'react';
import styled from 'styled-components';
import PodcastList from './PodcastList';

const PodcastStyled = styled.div`
  display: flex;
`;

const PodcastArtworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 40px;
`;

const PodcastPageArtwork = styled.img`
  width: 300px;
`;

const Podcast = ({ podcast, feed }) => (
  Object.keys(feed).length > 0 && (
  <PodcastStyled>
   <PodcastArtworkContainer>
      <PodcastPageArtwork src={podcast.artworkUrl600} />
    </PodcastArtworkContainer>
    <div>
      <div>{podcast.collectionName}</div>
      <div>{podcast.artistName}</div>
      <br />
      Description
      <div>{feed.description[0]}</div>
    </div>
    <div>
      {feed.item.map((episode, i) => <PodcastList key={i} episode={episode} />)}
    </div>
  </PodcastStyled>
  )
);

export default Podcast;
