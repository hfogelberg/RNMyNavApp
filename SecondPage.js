import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight
} from 'react-native';
import styles from './Styles';

class SecondPage extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.text}>
          Second Page
        </Text>

        <Text style={styles.text}>
          {this.props.message}
        </Text>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={this.gotoThirdPage.bind(this)}>
            <Text style={styles.buttonLabel}>
              Go To Page Three
            </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={this.gotoFirstPage.bind(this)}>
            <Text style={styles.buttonLabel}>
              Go To Page One
            </Text>
        </TouchableHighlight>
      </View>
    )
  }

  gotoFirstPage() {
    this.props.navigator.push({
     id: 'FirstPage'
   });
  }

  gotoThirdPage() {
    this.props.navigator.push({
     id: 'ThirdPage'
   });
  }
}

module.exports = SecondPage;
