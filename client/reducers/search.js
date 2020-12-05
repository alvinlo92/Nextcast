const searchReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_PAGE':
      return action.results;
    default:
      return state;
  }
};

export default searchReducer;
