import React from 'react';
import styled from 'styled-components';
import PodcastList from './PodcastList';

const PodcastCSS = styled.div`
  position: fixed;
  top: 0;
  left: 230px;
  right: 0;
  display: flex;
`;

const ArtworkContainerCSS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 40px;
`;

const ArtworkCSS = styled.img`
  width: 300px;
`;

const Podcast = ({ page, podcast, feed }) => (
  Object.keys(feed).length > 0 && page === podcast.collectionName &&
  (
    <PodcastCSS>
    <ArtworkContainerCSS>
        <ArtworkCSS src={podcast.artworkUrl600} />
      </ArtworkContainerCSS>
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
    </PodcastCSS>
  )
);

export default Podcast;
