import React, { Component, PropTypes } from 'react';
import { View, TouchableHighlight, Text, Slider, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class DemoTimer extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      value: 1
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({
      count: this.state.count + this.state.value,
    });
  }

  navSecond(){
    this.props.navigator.push({
      id: 'gallery'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon.ToolbarAndroid
          title="Timer"
          titleColor="white"
          style={styles.toolbar}
        />
        <Text>Current Scene: {this.props.id}</Text>
        <TouchableHighlight onPress={this.navSecond.bind(this)}>
          <Text>
            Navigate to gallery
          </Text>
        </TouchableHighlight>
        <View style={styles.up}>
          <Text style={styles.welcome}>
            {this.state.count}
          </Text>
          <Slider
            minimumValue={-10}
            maximumValue={10}
            step={1}
            style={styles.slider}
            onValueChange={(value) => this.setState({value: value})} />
        </View>
      </View>
    )
  }
}

DemoTimer.propTypes = {
  id: PropTypes.string,
  onForward: PropTypes.func,
  onBack: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    height: 56,
    backgroundColor: '#FF6600'
  },
  up: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  slider: {
    height: 100,
    margin: 10,
    width: 400
  },
});

export default DemoTimer;