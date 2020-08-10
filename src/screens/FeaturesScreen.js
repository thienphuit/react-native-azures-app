import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableHighlight } from "react-native";
import { theme } from "../common";
//import { FlatList } from "react-native-gesture-handler";
import { FontAwesome, Feather, Entypo } from "@expo/vector-icons";
import {Button} from '../components';
import { MaterialIcons } from '@expo/vector-icons';
//import StatusBarBackground from '../common/statusbar';
import Footer from '../screens/Footer';
const LISTFEATURE = [
  {icon: 'dollar', title: 'Ad Boxes', content: 'Built to the better', color: 'green'},
  {icon: 'mobile', title: 'Ad Show onScroll', content: 'Showing under your Content'},
  {icon: 'clock-o', title: 'Ads with Timers', content: 'Showing Full or Modal Boxes'},
  {icon: 'mobile', title: 'Add To Home', content: 'Invite Visitors to add to Their Homepage'},
  {icon: 'mobile', title: 'Ad Boxes', content: 'Built to the better'},
  {icon: 'mobile', title: 'Ad Boxes', content: 'Built to the better'}
]

const FeaturesScreen = ({route,  navigation: { goBack }}) => {
  //render() {
    console.log("btn",route.name)
    const itemFeature = item => {
      return (
        <View>
          <View style={styles.itemFeature}>
          <View style={{flexDirection: 'row', alignItems:'center', }}>
          <FontAwesome name={item.icon} size={32} color={item.color} />
          <View style={{marginLeft: 10}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={{color: '#c9ced3'}}>{item.content}</Text>
          </View>
          </View>
          <Entypo name="chevron-small-right" size={24} color="black" />
          </View>
          <View style={styles.dashLine}></View>
        </View>
      )
    }
    const nameComponent = route;
    return (
      <View>
        <View style={styles.statusBarBackground}></View>
        <ScrollView  alwaysBounceVertical={true}>
        <View style={styles.container}>
          <View style={styles.header}>
           <View style={{flexDirection: 'row', alignItems: 'center',
            justifyContent: 'space-between',}}>
           <TouchableHighlight onPress={() => goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="blue" />
            </TouchableHighlight>
            <Text style={{marginLeft: 20, fontSize: 20, fontWeight: 'bold'}}>{nameComponent.name}</Text>
           </View>
            <Text>avatar</Text>
          </View>
          <View style={styles.contentFeature}>
            <Text style={{lineHeight: 30, fontSize: 16}}>
              Components are the founding elements of our products, and shared
              among all of them, with unique pages to match style of the product
            </Text>
          </View>
          <View style={styles.listFeature}>
            <FlatList  
              data = {LISTFEATURE}
              renderItem= {({item}) => itemFeature(item)}
              keyExtractor={(item) => item.id}
            />
          </View>
          <Footer />
        </View>
        </ScrollView>
      </View>
    );
  //}
}
export default FeaturesScreen;
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  dashLine: {
    height: 1,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    marginTop: 20,
    marginBottom: 10,
  },
  itemFeature: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  listFeature: {
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
  },
  contentFeature: {
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
  },
  container: {
    backgroundColor: '#F0F0F0'
  },
  statusBarBackground: {
    height: Platform.OS === "ios" ? 30 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
    backgroundColor: "white",
  },
  header: {
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: theme.sizes.base,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: 'wrap',
  },
});
