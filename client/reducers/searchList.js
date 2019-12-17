const searchListReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_LIST':
      return action.podcasts;
    default:
      return state;
  }
};

export default searchListReducer;
