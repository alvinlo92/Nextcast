import axios from 'axios';
import changeSearchList from './searchList';

const handleSearchChange = (endpoint) => (dispatch) => axios.get(`/api/search/${endpoint}`)
  .then((res) => {
    dispatch(changeSearchList(res.data));
  })
  .catch((err) => {
    console.log(err);
  });

export default handleSearchChange;
