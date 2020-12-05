import { combineReducers } from 'redux';
import search from './search';
import podcast from './podcast';
import topCharts from './topCharts';

const rootReducer = combineReducers({
  search,
  topCharts,
  podcast,
});

export default rootReducer;
