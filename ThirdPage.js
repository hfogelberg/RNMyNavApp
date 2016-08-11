import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight
} from 'react-native';
import styles from './Styles';

class ThirdPage extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.text}>
          Third Page
        </Text>

        <Text style={styles.text}>
          {this.props.message}
        </Text>

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
}

module.exports = ThirdPage;
