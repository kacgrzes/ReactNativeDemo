import { View, Text, TouchableNativeFeedback } from 'react-native';
import React from 'react';
import styles from './styles';

const NavigatorView = () => (
  <View style={styles.drawer}>
    <View style={styles.drawerHeader}>
      <Text>Hello,</Text>
      <Text>Kacper Grzeszczyk</Text>
      <TouchableNativeFeedback
        onPress={() => {}}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <Text style={styles.profileButton}>See profile</Text>
      </TouchableNativeFeedback>
    </View>
    <View style={styles.drawerNavigation}>
      <TouchableNativeFeedback
        onPress={() => {}}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={styles.item}>
          <Text>News</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => {}}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={styles.item}>
          <Text>Bookmarks</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => {}}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={styles.item}>
          <Text>Create account</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  </View>
);

export default NavigatorView;