import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Home from './Home';
import Navbar from './Navbar';
import Topbar from './Topbar';
import SearchPageContainer from '../containers/SearchPageContainer';
import TopChartsContainer from '../containers/TopChartsContainer';
import PodcastContainer from '../containers/PodcastContainer';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(30, 30, 30);
    font-family: 'Roboto', sans-serif;
    color: rgb(255, 255, 255);
  }
`;

const App = () => (
  <Router>
    <GlobalStyle />
    <Navbar />
    <Topbar />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    <Switch>
      <Route path="/search" component={SearchPageContainer} />
    </Switch>
    <Switch>
      <Route path="/top-charts" component={TopChartsContainer} />
    </Switch>
    <Switch>
      <Route path="/podcast" component={PodcastContainer} />
    </Switch>
  </Router>
);

export default App;
