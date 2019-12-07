import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';

import Podcast from './Podcast';

import SearchContainer from '../containers/SearchContainer';
import SearchListContainer from '../containers/SearchListContainer';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(18, 18, 18);
    font-family: sans-serif;
    color: #FFFFFF;
    margin: 0px;
    padding: 0px;
  }
`;

const SearchStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // podcastPage: {},
      // showPodcastPage: false,
      // metaData: {},
    };

    this.handleClickToPodcastPage = this.handleClickToPodcastPage.bind(this);
    this.handleReturnToSearchResults = this.handleReturnToSearchResults.bind(this);
  }

  handleClickToPodcastPage(podcast) {
    axios.get('/api/podcast/info', {
      params: {
        url: podcast.feedUrl,
      },
    })
      .then((res) => {
        this.setState({ metaData: res.data.rss.channel[0] });
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      podcastPage: podcast,
      showPodcastPage: true,
    });
  }

  handleReturnToSearchResults() {
    this.setState({
      showPodcastPage: false,
      metaData: {},
    });
  }

  render() {
    const {
      showPodcastPage, metaData, podcastPage,
    } = this.state;
    return (
      <div>
        <GlobalStyle />
        <SearchStyled>
          <h1>NextCast</h1>
          <SearchContainer />
        </SearchStyled>
        <SearchListContainer />
        {/* {showPodcastPage && (
          Object.entries(metaData).length !== 0 && (
            <Podcast
              podcast={podcastPage}
              metaData={metaData}
              handleReturnToSearchResults={this.handleReturnToSearchResults}
            />
          )
        )} */}
      </div>
    );
  }
}

export default App;
