import { connect } from 'react-redux';
import Podcast from '../components/Podcast';

const mapStateToProps = (state) => ({
  page: state.page,
  podcast: state.podcast.podcast,
  feed: state.podcast.feed,
});

const PodcastContainer = connect(mapStateToProps, null)(Podcast);

export default PodcastContainer;
