import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { theme } from "../common";
import { CardView, Button } from "../components";
import { FlatGrid } from "react-native-super-grid";
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";
import Footer from "./Footer";

const data = [
  {
    icon: "fonticons",
    name: "General",
    content: "Multi Purpose Pages",
    color: "#5d5bd8",
  },
  {
    icon: "times-rectangle-o",
    name: "App Styled",
    content: "Multi Purpose Pages",
    color: "#9761d6",
  },
  {
    icon: "cube",
    name: "Starters",
    content: "Multi Purpose Pages",
    color: "violet",
  },
  { icon: "cube", name: "Actions", content: "Multi Purpose Pages" },
];
const Pages = () => {
  const itemPage = (item) => {
    return (
      <View>
        <CardView style={styles.itemPage}>
          <FontAwesome name={item.icon} size={50} color={item.color} />
          <Text
            style={{
              marginBottom: 10,
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {item.name}
          </Text>
          <Text style={{ fontSize: 12, color: "#94b4e5" }}>{item.content}</Text>
          <Text style={{ color: "#e0e0e0", marginTop: 30 }}>Tab to View</Text>
        </CardView>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.statusBarBackground}></View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text>Back</Text>
            <Text>Component</Text>
            <Text>avatar</Text>
          </View>
          <View>
            <CardView>
              <Text>
                Packed with powerful built pages that are heghly customizable
                and blazing fast to load. We're caregorized our purpose to make
                easier for you to find them.
              </Text>
            </CardView>
          </View>
          <View style={styles.listPage}>
            <FlatGrid
              itemDimension={130}
              data={data}
              renderItem={({ item }) => itemPage(item)}
            />
          </View>
          <View>
            <CardView style={{marginBottom: 1}}>
             <View style={styles.componentHear}>
             <FontAwesome name="heart" size={40} color="#d46c73" />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Components
                </Text>
                <Text style={{ color: "#94b4e5" }}>
                  Build your pages! It's just Copy and Paste
                </Text>
              </View>
             </View>
            </CardView>
            <CardView  style={{marginBottom: 1}}>
              <View style={styles.component}>
              <FontAwesome name="dropbox" size={40} color="#867f74" />
                <View style={{ marginLeft: 20, flex: 1, marginRight: 10 }}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Commerce Pages
                  </Text>
                  <Text style={{ color: "#94b4e5" }}>
                    Added in azures 2.2 your Request
                  </Text>
                </View>
                <Button style={styles.btnView}>
                  <Text>View</Text>
                </Button>
              </View>
            </CardView>
            <CardView style={{marginBottom: 1}}>
              <View style={styles.component}>
              <FontAwesome name="shopping-bag" size={40} color="#BDC3BD" />
                <View style={{ marginLeft: 20, flex: 1, marginRight: 10 }}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Finance Pages
                  </Text>
                  <Text style={{ color: "#94b4e5" }}>
                    Added in azures 2.2 your Request
                  </Text>
                </View>
                <Button style={styles.btnView}>
                  <Text>View</Text>
                </Button>
              </View>
            </CardView>
          </View>
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  btnView: {
    backgroundColor: "#5689D6",
    height: 40
  },
  componentHear: {
    flexDirection: "row",
    alignItems: 'center',
  },
  component: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 1,
  },
  itemPage: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
    paddingTop: 30,
  },
  listPage: {
    //marginHorizontal: theme.sizes.base
  },
  container: {
    backgroundColor: "#F0F0F0",
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
  },
});
export default Pages;
