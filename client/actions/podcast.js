import axios from 'axios';

const changePodcast = (podcast) => ({
  type: 'CHANGE_PODCAST',
  podcast,
});

const changePodcastFeed = (feed) => ({
  type: 'CHANGE_PODCAST_FEED',
  feed,
});

const handlePodcast = (podcast) => (dispatch) => {
  dispatch(changePodcast(podcast));
  const params = { url: podcast.feedUrl };
  axios.get('/api/podcast/feed', { params })
    .then((res) => dispatch(changePodcastFeed(res.data.rss.channel[0])))
    .catch(console.error);
};

export {
  changePodcast,
  changePodcastFeed,
  handlePodcast,
};
