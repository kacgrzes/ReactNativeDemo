import React, { Component, PropTypes } from 'react';
import {
  View,
  ListView,
  RefreshControl,
} from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import fetchArticles from '../actions/fetchArticles';
import ArticleItem from '../components/ArticleItem';

import styles from '../components/styles';

class ArticlesList extends Component {
  static contextTypes = {
    getDrawer: PropTypes.func
  };

  constructor() {
    super();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds
    };

    setTimeout(() => {
      this.drawer = this.context.getDrawer();
    });
  }

  componentDidMount() {
    this.props.fetchArticles();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.articles !== this.props.articles) {
      const ds = this.state.dataSource.cloneWithRows(newsItems);

      this.setState({
        dataSource: ds
      });
    }
  }

  viewItem(content) {
    this.props.navigator.push({
      id: 'article',
      content: content,
    });
  }

  openDrawer() {
    this.drawer.openDrawer();
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon.ToolbarAndroid
          title="Articles"
          titleColor="white"
          style={styles.toolbar}
          navIconName={"menu"}
          onIconClicked={() => this.openDrawer()}
        />
        <View style={styles.body}>
          <ListView
            initialListSize={2}
            dataSource={this.state.dataSource}
            refreshControl={
              <RefreshControl
                refreshing={this.props.isLoading}
                onRefresh={() => this.props.fetchArticles()}
              />
            }
            onEndReached={
              () => this.props.fetchArticles()
            }
            renderRow={article => <ArticleItem article={article} onArticlePress={content => this.viewItem(content)}/>}
          />
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

const mapStateToProps = state => ({
  articles: state.articles,
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);