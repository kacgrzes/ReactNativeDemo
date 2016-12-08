import React, { Component, PropTypes } from 'react';
import { View, TouchableHighlight, Text, Slider, StyleSheet } from 'react-native';

class MyScene extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

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

  render() {
    return (
      <View style={styles.container}>
        <Text>Current Scene: {this.props.title}</Text>

        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
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

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

export default MyScene;