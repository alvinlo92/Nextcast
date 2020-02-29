/* eslint-disable no-console */
import axios from 'axios';
import changeSearchPage from './searchPage';

const getSearchList = (url) => (dispatch) => {
  if (url === '') {
    dispatch(changeSearchPage([]));
  } else {
    axios.get(`/api/search/${url}`)
      .then((res) => dispatch(changeSearchPage(res.data)))
      .catch(console.error);
  }
};

export default getSearchList;
