import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import NavBarContainer from '../containers/NavBarContainer';
import SearchContainer from '../containers/SearchContainer';
import SearchListContainer from '../containers/SearchListContainer';
import PodcastContainer from '../containers/PodcastContainer';

const GlobalStyle = createGlobalStyle`
  body {
    // background-color: rgb(18, 18, 18);
    // font-family: sans-serif;
    // color: #FFFFFF;
    // margin: 0px;
    // padding: 0px;
  }
`;

const App = () => (
  <div>
    <GlobalStyle />
    <NavBarContainer />
    <SearchContainer />
    <SearchListContainer />
    <PodcastContainer />
  </div>
);

export default App;
