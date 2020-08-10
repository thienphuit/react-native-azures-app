import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { theme } from "../common";
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";

const ICON_SHARE = [
    {id: 'i1', icon: 'facebook-square', color: '#5689D6'},
    {id: 'i2', icon: 'twitter-square', color: '#559AF8'},
    {id: 'i3', icon: 'phone-square', color: '#55AB68'},
    {id: 'i4', icon: 'share-square', color: '#CA4F57'},
    {id: 'i5', icon: 'git-square', color: '#5689D6'}
  ]
const Footer = () => {
  const itemIconShare = (item) => {
    return (
      <View style={styles.itemIconShare}>
        <FontAwesome name={item.icon} size={40} color={item.color} />
      </View>
    );
  };
  // render() {
  return (
    <View style={styles.azures}>
      <Text style={styles.titleReady}>Azures</Text>
      <Text>Put a title color in your life</Text>
      <Text style={{ margin: 20 }}>
        built to match the design trends and give your page the awasome facelift
        it desevers
      </Text>
      <FlatList
        data={ICON_SHARE}
        horizontal={true}
        renderItem={({ item }) => itemIconShare(item)}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.dash}></View>
      <View style={styles.footer}>
        <Text>Copyright @Enabled 2017. All Rights Reserved</Text>
      </View>
    </View>
  );
  //}
};
export default Footer;

const styles = StyleSheet.create({
  itemIconShare: {
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  listSocial: {
    flexDirection: "row",
    marginBottom: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
    //alignItems: 'center',
    marginTop: 20,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  azures: {
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: theme.sizes.base,
    // padding: 20,
    paddingBottom: 10,
    paddingTop: 20,
  },
  dash: {
    backgroundColor: "#B3B3B3",
    //borderWidth: 1,
    height: 0.5,
    width: "100%",
    borderRadius: 1,
  },
});
