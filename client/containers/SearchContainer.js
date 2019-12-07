import { connect } from 'react-redux';
import Search from '../components/Search';
import handleSearchChange from '../actions/search';

const mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (search) => {
    const endpoint = search.toLowerCase().split(' ').join('+');
    dispatch(handleSearchChange(endpoint));
  },
});

const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
