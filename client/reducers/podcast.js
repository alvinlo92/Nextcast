const podcastReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_PODCAST':
      return {
        ...state,
        podcast: action.podcast,
      };
    case 'CHANGE_PODCAST_FEED':
      return {
        ...state,
        feed: action.feed,
      };
    default:
      return state;
  }
};

export default podcastReducer;
