import React, { Component } from 'react';
import { ScrollView, Text, Navigator } from 'react-native';

export default class MyScene extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          users: responseJson,
        });
      })
  }

  render() {
    return (
      <ScrollView>
        {this.state.users.map(user => <Text key={user.id}>{user.name}</Text> )}
      </ScrollView>
    )
  }
}