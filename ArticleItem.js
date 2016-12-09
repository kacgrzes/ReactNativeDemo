import React, { Component, PropTypes } from 'react';
import {
  View,
  ListView,
  Text,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class ArticleItem extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  componentDidMount() {
    this.getNews();
  }

  updateNewsItemsUI(newsItems) {
    const ds = this.state.dataSource.cloneWithRows(newsItems);

    this.setState({
      dataSource: ds,
      loaded: true
    });
  }

  getNews() {
    const TOP_STORIES_API = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    let newsItems = [];

    fetch(TOP_STORIES_API)
      .then(response => response.json())
      .then(topStories => {
        for(let i = 0; i < 10; ++i) {
          const storyUrl = `https://hacker-news.firebaseio.com/v0/item/${topStories[i]}.json`;
          fetch(storyUrl)
            .then(response => response.json())
            .then(story => {
              console.log(story);
              newsItems = [...newsItems, story];
              this.updateNewsItemsUI(newsItems);
            });
        }
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon.ToolbarAndroid
          title="Top Stories"
          titleColor="white"
          style={styles.toolbar}
        />
        <View style={styles.body}>
          {
            this.state.loaded &&

            <ListView
              initialListSize={1}
              dataSource={this.state.dataSource}
              renderRow={(news) => <Text style={{fontSize: 16}}>{news.title}</Text>}
            />
          }
        </View>
      </View>
    )
  }
}

ArticleItem.propTypes = {
  id: PropTypes.string,
  onForward: PropTypes.func,
  onBack: PropTypes.func,
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
  body: {
    flex: 1,
    padding: 12,
  }
});

export default ArticleItem;