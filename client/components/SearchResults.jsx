import React, { Component } from 'react';
import styled from 'styled-components';

const PodcastContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  margin: 10px;
`;

const PodcastArtwork = styled.img`
  width: 100%;
`;

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClickToPodcastPage(this.props.podcast);
  }

  render() {
    let { podcast } = this.props;
    return (
      <PodcastContainer>
        <PodcastArtwork src={podcast.artworkUrl600} onClick={() => this.handleClick()}/>

        {podcast.collectionName.length > 25 ? <div>{podcast.collectionName.slice(0, 22) + '...'}</div> : <div>{podcast.collectionName}</div>}

        {podcast.artistName.length > 25 ? <div>{podcast.artistName.slice(0, 22) + '...'}</div> : <div>{podcast.artistName}</div>}
      </PodcastContainer>
    )
  }
}

export default SearchResults;