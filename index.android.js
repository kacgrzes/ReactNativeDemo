import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
  StatusBar,
  BackAndroid
} from 'react-native';

import DemoTimer from './DemoTimer';
import DemoGallery from './DemoGallery';
import ArticlesList from './ArticlesList';
import ArticleView from './ArticleView';

let _navigator; // we fill this up upon on first navigation.

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
    return false;
  }
  _navigator.pop();
  return true;
});

export default class HnReader extends Component {
  getScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'timer':
        return (<DemoTimer navigator={navigator} />);
      case 'gallery':
        return (<DemoGallery navigator={navigator} />);
      case 'articles':
        return (<ArticlesList navigator={navigator} />);
      case 'article':
        return (<ArticleView navigator={navigator} url={route.url}/>);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#FF6600"
          barStyle="light-content"
        />
        <Navigator
          style={styles.container}
          initialRoute={{id: 'articles'}}
          renderScene={this.getScene}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
  },
});

AppRegistry.registerComponent('HnReader', () => HnReader);
