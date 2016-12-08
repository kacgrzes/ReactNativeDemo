import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

export default class MyScene extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  render() {
    let pic = {
      uri: 'http://andrewbtran.github.io/JRN-418/class6/cat.jpg'
    };
    return (
      <View>
        <View>
          <Text>Hi! My name is {this.props.title}.</Text>
        </View>
        <View style={styles.down}>
          <Image source={pic} style={styles.image}/>
          <Image source={pic} style={styles.image}/>
          <Image source={pic} style={styles.image}/>
          <Image source={pic} style={styles.image}/>
          <Image source={pic} style={styles.image}/>
          <Image source={pic} style={styles.image}/>
          <Image source={pic} style={styles.image}/>
          <Image source={pic} style={styles.image}/>
          <Image source={pic} style={styles.image}/>
          <Image source={pic} style={styles.image}/>
          <Image source={pic} style={styles.image}/>
          <Image source={pic} style={styles.image}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
