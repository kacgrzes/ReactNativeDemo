import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class ArticleItem extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <TouchableNativeFeedback
        onPress={() => this.props.onArticlePress(this.props.news.url)}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={styles.item}>
          <Text style={styles.title}>{this.props.news.title}</Text>
          <View style={styles.moreInfo}>
            <Text style={styles.moreInfoText}>{this.props.news.score} pts by {this.props.news.by}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

ArticleItem.propTypes = {
  id: PropTypes.string,
  onForward: PropTypes.func,
  onBack: PropTypes.func,
  news: PropTypes.object,
  onArticlePress: PropTypes.func,
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 8,
    paddingLeft: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  title: {
    fontSize: 18
  },
  moreInfo: {
    flex: 1,
    flexDirection: 'row'
  },
  moreInfoText: {
    fontSize: 14,
    color: 'grey'
  }
});

export default ArticleItem;