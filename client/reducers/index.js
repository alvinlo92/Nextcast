import { combineReducers } from 'redux';
import searchList from './searchList';
import podcast from './podcast';
import topCharts from './topCharts';
import page from './navBar';

const rootReducer = combineReducers({
  page,
  searchList,
  topCharts,
  podcast,
});

export default rootReducer;
