import { connect } from 'react-redux';
import Search from '../components/Search';
import changePage from '../actions/navBar';
import getSearchList from '../actions/search';

const mapDispatchToProps = (dispatch) => ({
  handlePageClick: (page) => {
    dispatch(changePage(page));
  },
  handleSearchInputChange: (search) => {
    const url = search.toLowerCase().split(' ').join('+');
    dispatch(getSearchList(url));
  },
});

const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
