const searchPageReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_PAGE':
      return action.podcasts;
    default:
      return state;
  }
};

export default searchPageReducer;
