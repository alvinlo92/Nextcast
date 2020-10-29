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
      {topCharts.map((podcast) => (
        <TopChartsItem
          key={podcast.id}
          podcast={podcast}
        />
      ))}
    </StyledTopCharts>
  );
};

export default TopCharts;
