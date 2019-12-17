import { combineReducers } from 'redux';
import searchList from './searchList';
import podcast from './podcast';
import page from './navBar'

const rootReducer = combineReducers({
  page,
  searchList,
  podcast,
});

export default rootReducer;
