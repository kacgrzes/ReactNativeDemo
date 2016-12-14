import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  toolbar: {
    height: 56,
    backgroundColor: '#2c93e1'
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
  },
  drawer: {
    flex: 1
  },
  drawerHeader: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    justifyContent: 'space-between'
  },
  drawerNavigation: {
    flex: 3,
    backgroundColor: '#f0f0f0',
    paddingTop: 20,
  },
  profileButton: {
    fontSize: 18,
    color: '#1d1d1d',
    alignSelf: 'flex-start'
  },
  articleItem: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    minHeight: 80,
    borderBottomColor: '#f2f2f2',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  articleItemImage: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  articleItemDescription: {
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'column',
  },
  articleItemTitle: {
    fontSize: 18,
    color: '#1d1d1d',
    flexGrow: 1
  },
  articleItemMoreDetails: {
    flexDirection: 'row',
    fontSize: 14,
    color: '#b1b1b1',
  }
});

export default styles;