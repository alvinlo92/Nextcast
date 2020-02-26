import React from 'react';
import styled from 'styled-components';
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

class TopCharts extends React.Component {
  componentDidMount() {
    const { handleTopChartsChange } = this.props;
    handleTopChartsChange();
  }

  render() {
    const { page, topCharts } = this.props;
    return (
      <StyledTopCharts>
        {page === 'topcharts' && topCharts.map((podcast) => (
          <TopChartsItem
            key={podcast.id}
            podcast={podcast}
          />
        ))}
      </StyledTopCharts>
    );
  }
}

export default TopCharts;
