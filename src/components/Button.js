import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {theme} from '../common';

export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
          <View style={{...styles.button, ...this.props.style}}>
              <Text style={{...styles.buttonText}}>{this.props.children}</Text>
          </View>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
    button: {
        borderRadius: theme.sizes.radius,
        height: theme.sizes.base * 3,
        justifyContent: 'center',
       // marginVertical: theme.sizes.padding / 3,
        backgroundColor: 'blue',
        padding: 10,
    },
    buttonText: {
        color:'white',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }

})
