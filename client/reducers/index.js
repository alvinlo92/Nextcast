import { combineReducers } from 'redux';
import searchList from './searchList';
import podcast from './podcast';
import topCharts from './topCharts';
import page from './navbar';

const rootReducer = combineReducers({
  page,
  searchList,
  topCharts,
  podcast,
});

export default rootReducer;
