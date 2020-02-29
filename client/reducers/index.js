import { combineReducers } from 'redux';
import searchResults from './searchPage';
import podcast from './podcast';
import topCharts from './topCharts';

const rootReducer = combineReducers({
  searchResults,
  topCharts,
  podcast,
});

export default rootReducer;
