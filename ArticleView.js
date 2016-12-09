import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  WebView,
  Text
} from 'react-native';

import Spinner from 'react-native-spinkit';

import Icon from 'react-native-vector-icons/MaterialIcons';

class ArticleView extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  onLoadEnd() {
    this.setState({ loading: false});
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: this.props.url}}
          onLoadEnd={() => this.onLoadEnd()}
        />
      </View>
    )
  }
}

ArticleView.propTypes = {
  url: PropTypes.string,
};

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#FF6600'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  spinner: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 2,
    top: 10,
    right: 10,
    width: 50,
    height: 50
  }
});

export default ArticleView;