import { View, StatusBar, DrawerLayoutAndroid, Text, TouchableNativeFeedback } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

import Navigation from './Navigation';
import NavigatorView from './NavigatorView';

class App extends Component {
  static childContextTypes = {
    getDrawer: React.PropTypes.func
  };

  getChildContext() {
    return {
      getDrawer: () => this.drawer,
    }
  }

  drawer = null;

  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        ref={ref => this.drawer = ref}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <NavigatorView/>}
      >
        <View style={styles.container}>
          <StatusBar
            backgroundColor="#2c93e1"
            barStyle="light-content"
          />
          <Navigation refs={this.refs}/>
        </View>
      </DrawerLayoutAndroid>
    )
  }
}

export default App;