/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component } from 'react';
 import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   Navigator,
   AppRegistry
 } from 'react-native';
 import FirstPage from './FirstPage';
 import SecondPage from './SecondPage';
 import ThirdPage from './ThirdPage';

class RNMyNavApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'FirstPage', name: 'Index'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
        if (route.sceneConfig) {
          return route.sceneConfig;
        }
        return Navigator.SceneConfigs.FloatFromRight;
      }} />
  );
}

renderScene(route, navigator) {
  var routeId = route.id;
  if (routeId === 'FirstPage') {
    return (
      <FirstPage navigator={navigator} message='Hello Page One'/>
    );
  }
  if (routeId === 'SecondPage') {
    return (
      <SecondPage navigator={navigator} message='How are you doing?'/>
    );
  }
  if (routeId === 'ThirdPage') {
    return (
      <ThirdPage navigator={navigator} message='Gday Mate'/>
    )
  }
}

noRoute(navigator) {
  return (
    <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>请在 index.js 的 renderScene 中配置这个页面的路由</Text>
      </TouchableOpacity>
    </View>
  );
  }
}

AppRegistry.registerComponent('RNMyNavApp', () => RNMyNavApp);
