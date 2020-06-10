const changePodcast = (podcast) => ({
  type: 'CHANGE_PODCAST',
  podcast,
});

const changePodcastFeed = (feed) => ({
  type: 'CHANGE_PODCAST_FEED',
  feed,
});

export {
  changePodcast,
  changePodcastFeed,
};
