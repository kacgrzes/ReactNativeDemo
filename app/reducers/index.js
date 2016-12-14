import { combineReducers } from 'redux';

import articles from './articles';
import isLoading from './isLoading';

export default combineReducers({
  articles,
  isLoading
});