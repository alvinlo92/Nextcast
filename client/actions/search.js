import axios from 'axios';
import changeSearchList from './searchList';

const getSearchList = (url) => (dispatch) => {
  if (url === '') {
    dispatch(changeSearchList([]));
  } else {
    axios.get(`/api/search/${url}`)
      .then((res) => dispatch(changeSearchList(res.data)))
      .catch(console.error);
  }
};

export default getSearchList;
