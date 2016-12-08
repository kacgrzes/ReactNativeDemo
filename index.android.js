import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
  StatusBar
} from 'react-native';
import DemoTimer from './DemoTimer';

export default class DemoReactNative extends Component {
  getScene(route, navigator) {
    return (
      <DemoTimer
        title={route.title}

        onForward={() => {
          const nextIndex = route.index + 1;
          navigator.push({
            title: 'Scene ' + nextIndex,
            index: nextIndex,
          });
        }}

        onBack={() => {
          if (route.index > 0) {
            navigator.pop();
          }
        }}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#FF6600"
          barStyle="light-content"
        />
        <Navigator
          initialRoute={{ title: 'Dashboard' }}
          renderScene={this.getScene}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
  },
  toolbar: {
    height: 56,
    backgroundColor: '#FF6600'
  },
  up: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: 64,
    height: 50
  },
  slider: {
    height: 30,
    margin: 10,
    width: 200
  },
  down: {
    flex: 2,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('DemoReactNative', () => DemoReactNative);
