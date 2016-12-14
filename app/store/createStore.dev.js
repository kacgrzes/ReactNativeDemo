import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import reducers from '../reducers';

const middlewares = [
  thunk,
];

const enhancers = compose(
  applyMiddleware(...middlewares),
  devToolsEnhancer()
);

export default initialState => {
  return createStore(
    reducers,
    initialState,
    enhancers,
  );
};