import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableHighlight } from "react-native";
import { theme } from "../common";
import { CardView , Button} from "../components";
import { FontAwesome, Feather, Entypo } from "@expo/vector-icons";
import Footer from "./Footer";

export default class Settings extends Component {
  render() {
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
                <View style={styles.itemFeature}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome name="mobile" size={32} color="black" />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.title}>sadsadasd</Text>
                      <Text style={{ color: "#c9ced3" }}>dasdasd</Text>
                    </View>
                  </View>
                  <Entypo name="chevron-small-right" size={24} color="black" />
                </View>
                <View style={styles.dashLine}></View>
                <View style={styles.itemFeature}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome name="mobile" size={32} color="black" />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.title}>sadsadasd</Text>
                      <Text style={{ color: "#c9ced3" }}>dasdasd</Text>
                    </View>
                  </View>
                  <Entypo name="chevron-small-right" size={24} color="black" />
                </View>
                <View style={styles.dashLine}></View>
                <View style={styles.itemFeature}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome name="mobile" size={32} color="black" />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.title}>sadsadasd</Text>
                      <Text style={{ color: "#c9ced3" }}>dasdasd</Text>
                    </View>
                  </View>
                  <Entypo name="chevron-small-right" size={24} color="black" />
                </View>
                <View style={styles.dashLine}></View>
                <View style={styles.itemFeature}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome name="mobile" size={32} color="black" />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.title}>sadsadasd</Text>
                      <Text style={{ color: "#c9ced3" }}>dasdasd</Text>
                    </View>
                  </View>
                  <Entypo name="chevron-small-right" size={24} color="black" />
                </View>
                <View style={styles.dashLine}></View>
                <View style={styles.itemYouKnow}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      marginBottom: 20,
                    }}
                  >
                    Did you know?
                  </Text>
                  <Text style={{ lineHeight: 30 }}>
                    Fast loading, great support, premium quality. We have a tone
                    of awesome features, that make us stand out from our
                    competiors
                  </Text>
                </View>
                <View style={styles.dashLine}></View>
                <View style={styles.itemFeature}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome name="mobile" size={32} color="black" />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.title}>sadsadasd</Text>
                      <Text style={{ color: "#c9ced3" }}>dasdasd</Text>
                    </View>
                  </View>
                  <Entypo name="chevron-small-right" size={24} color="black" />
                </View>
                <View style={styles.dashLine}></View>
              </CardView>
            </View>
            <View >
              <CardView style={styles.request}>
                <Text style={{color: 'white', fontWeight: 'bold',fontSize: 18}}>Feature Request</Text>
                <Text style={{color: 'white'}}>We're always listening to your feedback</Text>
                <Text style={{color: 'white', fontSize: 12, marginTop: 30, marginBottom: 30}}>Do you like Azures, but want a specific feature? Please send us Feedback and feature suggestions and We'll consider it for future updates</Text>
                <Button style={styles.btnRequest}><Text>Request feature</Text></Button>
              </CardView>
            </View>
            <Footer />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btnRequest: {
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#598ad3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  request: {
    color : 'white',
    backgroundColor: '#598ad3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  itemYouKnow: {
    marginTop: 20,
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
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  dashLine: {
    height: 1,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    marginTop: 20,
    marginBottom: 10,
  },
  itemFeature: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});
