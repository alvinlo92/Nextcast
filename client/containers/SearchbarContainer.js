import { connect } from 'react-redux';
import Searchbar from '../components/Searchbar';
import getSearchList from '../actions/search';

const mapDispatchToProps = (dispatch) => ({
  handleSearchbarChange: (search) => {
    const url = search.toLowerCase().split(' ').join('+');
    dispatch(getSearchList(url));
  },
});

const SearchContainer = connect(null, mapDispatchToProps)(Searchbar);

export default SearchContainer;
