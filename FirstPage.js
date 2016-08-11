import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight
} from 'react-native';
import styles from './Styles';

class FirstPage extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.text}>
          First Page
        </Text>

        <Text style={styles.text}>
          {this.props.message}
        </Text>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={this.gotoSecondPage.bind(this)}>
            <Text style={styles.buttonLabel}>
              Go To Page 2
            </Text>
        </TouchableHighlight>
      </View>
    )
  }

  gotoSecondPage() {
    this.props.navigator.push({
     id: 'SecondPage'
   });
  }
}

module.exports = FirstPage;
