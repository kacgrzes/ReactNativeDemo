import React, { Component, PropTypes } from 'react';
import {
  View,
  WebView,
  ActivityIndicator
} from 'react-native';

import styles from '../components/styles';

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
        <ActivityIndicator
          animating={this.state.loading}
          style={styles.loading}
          color={'#2c93e1'}
          size={'large'}
        />
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

export default ArticleView;