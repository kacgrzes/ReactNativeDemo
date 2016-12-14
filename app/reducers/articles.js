import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE
} from '../actions/fetchArticles';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return [...action.data];
    default:
      return state;
  }
};
