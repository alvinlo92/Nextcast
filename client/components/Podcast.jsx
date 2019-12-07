import React, { Component } from 'react';
import styled from 'styled-components';

import PodcastList from './PodcastList';

const PodcastHomePageContainer = styled.div`
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

class Podcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribe: false,
    };

    this.handleBackButton = this.handleBackButton.bind(this);
    this.handleSubscribeButton = this.handleSubscribeButton.bind(this);
  }

  handleBackButton() {
    const { handleReturnToSearchResults } = this.props;
    handleReturnToSearchResults();
  }

  handleSubscribeButton() {
    const { subscribe } = this.state;
    if (subscribe) {
      this.setState({ subscribe: false });
    } else {
      this.setState({ subscribe: true });
    }
  }

  render() {
    const { subscribe } = this.state;
    const { podcast, metaData } = this.props;
    return (
      <PodcastHomePageContainer>
        <div>
          <button type="button" onClick={this.handleBackButton}>Back</button>
        </div>
        <PodcastArtworkContainer>
          <PodcastPageArtwork src={podcast.artworkUrl600} />
          {!subscribe && <button type="button" onClick={this.handleSubscribeButton}>Subscribe</button>}
          {subscribe && <button type="button" onClick={this.handleSubscribeButton}>Subscribed</button>}
        </PodcastArtworkContainer>
        <div>
          <div>{podcast.collectionName}</div>
          <div>{podcast.artistName}</div>
          <br />
          Description
          <div>{metaData.description[0]}</div>
        </div>
        <div>
          {metaData.item.map((episode, i) => <PodcastList key={i} episode={episode} />)}
        </div>
      </PodcastHomePageContainer>
    );
  }
}

export default Podcast;
