import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  WebView,
  ActivityIndicator
} from 'react-native';

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
          color={'#FF6600'}
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

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#FF6600'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  loading: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 2,
    top: 10,
    right: 0,
    left: 0,
  }
});

export default ArticleView;