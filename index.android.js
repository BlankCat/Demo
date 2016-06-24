/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
	  AppRegistry,
	  StyleSheet,
	  Text,
	  View,
    Image
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';  

class Demo extends Component {
  render() {
    var defaultName = 'FirstPageComponent';  
    var defaultComponent = FirstPageComponent;  

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
         <Image style={styles.pic} source={{uri: 'https://avatars3.githubusercontent.com/u/6133685?v=3&s=460'}}>
         </Image>
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
   pic: {
        width:100,
        height:100,
    }
});

AppRegistry.registerComponent('Demo', () => Demo);
