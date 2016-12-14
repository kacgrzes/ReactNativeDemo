import React, { Component } from 'react';
import {
  Navigator,
  BackAndroid
} from 'react-native';

import ArticlesList from '../scenes/ArticlesList';
import ArticleView from '../scenes/ArticleView';
import styles from './styles';

let _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
    return false;
  }
  _navigator.pop();
  return true;
});

class Navigation extends Component {

  getScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'articles':
        return (<ArticlesList navigator={navigator} />);
      case 'article':
        return (<ArticleView navigator={navigator} content={route.content}/>);
    }
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{id: 'articles'}}
        renderScene={this.getScene}
      />
    );
  }
}

export default Navigation;