const topChartsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_TOP_CHARTS':
      return action.topCharts;
    default:
      return state;
  }
};

export default topChartsReducer;
