import { connect } from 'react-redux';
import SearchList from '../components/SearchList';
import { handlePodcast } from '../actions/podcast';

const mapStateToProps = (state) => ({
  podcasts: state.searchList,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchListItemClick: (podcast) => {
    dispatch(handlePodcast(podcast));
  },
});

const SearchListContainer = connect(mapStateToProps, mapDispatchToProps)(SearchList);

export default SearchListContainer;
