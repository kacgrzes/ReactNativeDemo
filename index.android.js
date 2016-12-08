/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Slider,
  Picker
} from 'react-native';

export default class DemoReactNative extends Component {
  constructor() {
    super();
  }
  render() {
    let pic = {
      uri: 'http://andrewbtran.github.io/JRN-418/class6/cat.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello world!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Button
          onPress={() => {}}
          title="Ok!"
          color="#841584"
          accessibilityLabel="Ok, it works!"
        />
        <Slider
          minimumValue={0}
          maximumValue={50}
          style={styles.slider}
          onValueChange={(value) => this.setState({value: value})} />
        <Image source={pic} style={styles.image}/>
        <Picker
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
    width: 193,
    height: 130
  },
  slider: {
    height: 30,
    margin: 10,
    width: 200
  }
});

AppRegistry.registerComponent('DemoReactNative', () => DemoReactNative);
