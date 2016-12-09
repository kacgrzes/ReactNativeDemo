import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class MyScene extends Component {
  render() {
    let pic = {
      uri: 'http://andrewbtran.github.io/JRN-418/class6/cat.jpg'
    };
    return (
      <View style={styles.container}>
        <Icon.ToolbarAndroid
          title="Gallery"
          titleColor="white"
          navIconName="arrow-back"
          onIconClicked={this.props.navigator.pop}
          actions={[
            { title: 'Settings', iconName: 'settings', show: 'always' },
          ]}
          style={styles.toolbar}
        />
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
    backgroundColor: '#F5FCFF',
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
