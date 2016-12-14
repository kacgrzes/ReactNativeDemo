import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  TouchableNativeFeedback
} from 'react-native';
import moment from 'moment'

import styles from './styles';

class ArticleItem extends Component {
  render() {
    const time = moment.unix(this.props.article.timestamp).fromNow();

    return (
      <TouchableNativeFeedback
        onPress={() => this.props.onArticlePress(this.props.article.content)}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={styles.articleItem}>
          <Image source={{uri: 'http://placehold.it/50x50'}} style={styles.articleItemImage}/>
          <View style={styles.articleItemDescription}>
            <Text style={styles.articleItemTitle}>{this.props.article.title}</Text>
            <Text style={styles.articleItemMoreDetails}>{this.props.article.category.data.name} • {time}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

ArticleItem.propTypes = {
  article: PropTypes.object,
  onArticlePress: PropTypes.func,
};

export default ArticleItem;