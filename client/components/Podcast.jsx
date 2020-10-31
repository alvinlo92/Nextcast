import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import PodcastList from './PodcastList';

const StyledPodcast = styled.div`
  position: absolute;
  top: 65px;
  left: 250px;
  right: 25px;
  margin: 25px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 25px;
`;

const Artwork = styled.img`
  width: 280px;
  border-radius: 5px;
  margin-right: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 96px;
  font-weight: bold;
`;

const Artist = styled.div`
  font-size: 28px;
`;

const Line = styled.hr`
  margin-left: 25px;
  margin-right: 25px;
`;

const DescriptionContainer = styled.div`
  margin: 25px;
`;

const DescriptionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const EpisodeContainer = styled.div`
  margin: 25px;
`;

const EpisodesTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Podcast = () => {
  const podcast = useSelector((state) => state.podcast.podcast);
  const feed = useSelector((state) => state.podcast.feed);
  return (
    Object.keys(feed).length > 0 && (
      <StyledPodcast>
        <Header>
          <Artwork src={podcast.artworkUrl600} />
          <TitleContainer>
            <Title>{podcast.collectionName}</Title>
            <Artist>{podcast.artistName}</Artist>
          </TitleContainer>
        </Header>
        <DescriptionContainer>
          <DescriptionTitle>Description</DescriptionTitle>
          <div>{feed.description}</div>
        </DescriptionContainer>
        <Line />
        <EpisodeContainer>
          <EpisodesTitle>Episodes</EpisodesTitle>
          {feed.item.map((episode, i) => <PodcastList key={i} episode={episode} />)}
        </EpisodeContainer>
      </StyledPodcast>
    )
  );
};

export default Podcast;
