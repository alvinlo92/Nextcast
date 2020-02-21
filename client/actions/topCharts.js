import axios from 'axios';

const changeTopCharts = (topCharts) => ({
  type: 'CHANGE_TOP_CHARTS',
  topCharts,
});

const getTopCharts = () => (dispatch) => {
  axios.get('/api/topcharts')
    .then((res) => dispatch(changeTopCharts(res.data)))
    .catch(console.error);
};

export {
  changeTopCharts,
  getTopCharts,
};
