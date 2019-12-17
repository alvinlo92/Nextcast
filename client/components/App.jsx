import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SearchContainer from '../containers/SearchContainer';
import SearchListContainer from '../containers/SearchListContainer';
import PodcastContainer from '../containers/PodcastContainer';

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

const App = () => (
  <div>
    <GlobalStyle />
    <h1>NextCast</h1>
    <SearchStyled>
      <SearchContainer />
    </SearchStyled>
    <SearchListContainer />
    <PodcastContainer />
  </div>
);

export default App;
