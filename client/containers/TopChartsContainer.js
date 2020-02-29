import { connect } from 'react-redux';
import TopCharts from '../components/TopCharts';
import { getTopCharts } from '../actions/topCharts';

const mapStateToProps = (state) => ({
  topCharts: state.topCharts,
});

const mapDispatchToProps = (dispatch) => ({
  handleTopChartsChange: () => dispatch(getTopCharts()),
});

const TopChartsContainer = connect(mapStateToProps, mapDispatchToProps)(TopCharts);

export default TopChartsContainer;
