import { connect } from 'react-redux';
import SearchPage from '../components/SearchPage';
import { handlePodcast } from '../actions/podcast';

const mapStateToProps = (state) => ({
  podcasts: state.searchResults,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchListItemClick: (podcast) => {
    dispatch(handlePodcast(podcast));
  },
});

const SearchListContainer = connect(mapStateToProps, mapDispatchToProps)(SearchPage);

export default SearchListContainer;
