import React, { Component, PropTypes } from 'react';
import {
  View,
  ListView,
  Text,
  StyleSheet,
  ActivityIndicator,
  RefreshControl
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

  updateNewsItemsUI(newsItems) {
    const ds = this.state.dataSource.cloneWithRows(newsItems);

    this.setState({
      dataSource: ds,
      loaded: true
    });
  }

  getNews() {
    this.setState({
      loaded: false,
      dataSource: this.state.dataSource.cloneWithRows([]),
    });
    const TOP_STORIES_API = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    let newsItems = [];

    fetch(TOP_STORIES_API)
      .then(response => response.json())
      .then(topStories => {
        this.setState(({
          loaded: true,
        }));
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

  viewItem(url) {
    this.props.navigator.push({
      id: 'article',
      url: url,
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
          <ActivityIndicator
            animating={!this.state.loaded}
            style={styles.loading}
            color={'#FF6600'}
            size={'large'}
          />
          {
            this.state.loaded &&

            <ListView
              initialListSize={1}
              dataSource={this.state.dataSource}
              refreshControl={
                <RefreshControl
                  refreshing={!this.state.loaded}
                  onRefresh={() => this.getNews()}
                />
              }
              renderRow={(news) => <ArticleItem news={news} onArticlePress={url => this.viewItem(url)}/>}
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
    backgroundColor: '#f4f4f4'
  },
  body: {
    flex: 1,
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

export default ArticlesList;