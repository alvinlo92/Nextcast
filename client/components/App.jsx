import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';

import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';
import PodcastHomePage from './PodcastHomePage.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(18, 18, 18);
    font-family: sans-serif;
    color: #FFFFFF;
    margin: 0px;
    padding: 0px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      podcastPage: {},
      showPodcastPage: false,
      metaData: {},
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleClickToPodcastPage = this.handleClickToPodcastPage.bind(this);
    this.handleReturnToSearchResults = this.handleReturnToSearchResults.bind(this);
  }

  handleSearch(searchTerm) {
    axios.get(`/api/search/${searchTerm}`)
      .then((res) => {
        this.setState({
          searchResults: res.data,
          showPodcastPage: false,
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleClickToPodcastPage(podcast) {
    axios.get('/api/podcast/info', {
      params: {
        url: podcast.feedUrl
      }
    })
      .then((res) => {
        this.setState({ metaData: res.data });
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
      metaData: {}
    })
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <HeaderContainer>
          <h1>NextCast</h1>
          <SearchBar handleSearch={this.handleSearch} />
        </HeaderContainer>
        {!this.state.showPodcastPage && <SearchResultsContainer>
          {this.state.searchResults.length !== 0 && this.state.searchResults.map((podcast, i) => <SearchResults key={i} podcast={podcast} handleClickToPodcastPage={this.handleClickToPodcastPage} />)}
        </SearchResultsContainer>}
        {this.state.showPodcastPage && Object.entries(this.state.metaData).length !== 0 && <PodcastHomePage podcast={this.state.podcastPage} metaData={this.state.metaData} handleReturnToSearchResults={this.handleReturnToSearchResults}/>}
      </div>
    )
  }
}

export default App;