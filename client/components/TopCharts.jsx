/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import changeTopCharts from '../actions/topCharts';
import TopChartsItem from './TopChartsItem';

const StyledTopCharts = styled.div`
  position: absolute;
  top: 65px;
  left: 250px;
  right: 25px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
`;

const Cards = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill,minmax(190px,1fr));
`;

const TopCharts = () => {
  const topCharts = useSelector((state) => state.topCharts);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('/api/top-charts')
      .then((res) => dispatch(changeTopCharts(res.data)))
      .catch(console.error);
  }, []);
  return (
    <StyledTopCharts>
      {topCharts.length > 0 && <Title>Top Podcasts</Title>}
      <Cards>
        {topCharts.map((podcast, i) => (
          <TopChartsItem
            key={podcast.id}
            podcast={podcast}
            index={i}
          />
        ))}
      </Cards>
    </StyledTopCharts>
  );
};

export default TopCharts;
