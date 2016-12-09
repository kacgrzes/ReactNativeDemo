import React, { Component, PropTypes } from 'react';
import {
  View,
  ListView,
  Text,
  StyleSheet,
} from 'react-native';

import ArticleItem from './ArticleItem';
import Icon from 'react-native-vector-icons/MaterialIcons';

const randomData = [
  'row 1', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2',
  'row 2', 'row 1', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2',
  'row 2', 'row 2'];

class ArticlesList extends Component {
  constructor() {
    super();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
      loaded: false,
    };
  }

  componentDidMount() {
    this.getNews();
  }

  viewItem(url) {
    console.log(url);
    this.props.navigator.push({
      id: 'article',
      url: url,
    })
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
        for(let i = 0; i < 100; ++i) {
          const storyUrl = `https://hacker-news.firebaseio.com/v0/item/${topStories[i]}.json`;
          fetch(storyUrl)
            .then(response => response.json())
            .then(story => {
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
              renderRow={(news) => <Text style={styles.item} onPress={() => this.viewItem(news.url)}>{news.title}</Text>}
            />
          }
        </View>
      </View>
    )
  }
}

ArticlesList.propTypes = {
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
  },
  item: {
    fontSize: 16,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 10,
  }
});

export default ArticlesList;