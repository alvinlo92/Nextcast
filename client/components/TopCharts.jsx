/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import changeTopCharts from '../actions/topCharts';
import TopChartsItem from './TopChartsItem';

const StyledTopCharts = styled.div`
  position: fixed;
  top: 0;
  left: 230px;
  right: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
