import { connect } from 'react-redux';
import Search from '../components/Search';
import getSearchList from '../actions/search';

const mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (search) => {
    const url = search.toLowerCase().split(' ').join('+');
    dispatch(getSearchList(url));
  },
});

const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
