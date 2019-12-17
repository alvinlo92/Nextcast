import { combineReducers } from 'redux';
import searchList from './searchList';
import podcast from './podcast';

const rootReducer = combineReducers({
  searchList,
  podcast,
});

export default rootReducer;
