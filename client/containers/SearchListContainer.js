import { connect } from 'react-redux';
import SearchList from '../components/SearchList';

const mapStateToProps = (state) => ({
  podcasts: state.searchList,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchListItemClick: (podcast) => ({

  })
});

const SearchListContainer = connect(mapStateToProps, mapStateToProps)(SearchList);

export default SearchListContainer;
