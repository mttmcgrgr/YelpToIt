import React, { Component } from 'react';
import {LoginButton, RideRequestButton} from 'react-native-uber-rides';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class YelpToIt extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Yelp To It!
        </Text>
        <Text style={styles.instructions}>
          Search Yelp and get an Uber!
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <RideRequestButton
          pickup={{latitude: 37.7749, longitude:122.4194}}
          dropoff={{latitude: 37.8716, longitude: 122.2727}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
