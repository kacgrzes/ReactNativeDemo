export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

import {
  startLoading,
  stopLoading
} from './loading';

const url = '';

export const fetchArticlesRequest = () => {
  return {
    type: FETCH_ARTICLES_REQUEST
  }
};

export const fetchArticlesSuccess = articles => {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    data: articles.data,
  }
};

export const fetchArticlesFailure = () => {
  return {
    type: FETCH_ARTICLES_FAILURE
  }
};

const fetchArticles = () => {
  return dispatch => {
    dispatch(fetchArticlesRequest());
    dispatch(startLoading());

    return fetch(url)
      .then(response => response.json())
      .then(response => {
        dispatch(fetchArticlesSuccess(response.data));
        dispatch(stopLoading());
      })
      .catch(() => {
        dispatch(fetchArticlesFailure());
        dispatch(stopLoading());
      });
  }
};

export default fetchArticles;