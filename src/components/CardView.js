import React, { Component, Children } from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../common'

const CardView = (props) => {
   // const {style, children, ...props} = props
  return(
      <View style={{...styles.cardview, ...props.style}}>
          {props.children}
      </View>
  )
}
const styles = StyleSheet.create({
    cardview: {
        borderRadius: 16,
        marginHorizontal: theme.sizes.base,
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 20,
        marginTop: 20,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.7,
    }
})
export default CardView;
