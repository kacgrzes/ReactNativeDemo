import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './store';

import App from './components/App';

const store = createStore();

const setup = () => {
  class Root extends Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  }

  return Root;
};

export default setup;