import { connect } from 'react-redux';
import SearchList from '../components/SearchList';
import changePage from '../actions/navBar';
import { handlePodcast } from '../actions/podcast';

const mapStateToProps = (state) => ({
  page: state.page,
  podcasts: state.searchList,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchListItemClick: (podcast) => {
    dispatch(changePage(podcast.collectionName));
    dispatch(handlePodcast(podcast));
  },
});

const SearchListContainer = connect(mapStateToProps, mapDispatchToProps)(SearchList);

export default SearchListContainer;
