import React, { Component } from "react";
import {
  Text,
  View,
  Platform,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import Button from "../components/Button";
import { theme } from "../common";
const linkImage = require("../assets/avatar.png");
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";
import { FlatGrid } from "react-native-super-grid";
import { TouchableHighlight } from "react-native-gesture-handler";
import Footer from '../screens/Footer';
const data = [
  { icon: "shield", name: "Mobile Web" },
  { icon: "mobile", name: "Mobile PWA" },
  { icon: "cube", name: "Mobile Web" },
  { icon: "cube", name: "Mobile PWA" },
];
const LISTFEATURE = [
  {
    id: 1,
    icon: "shield",
    title: "Elite Quality",
    content: "Built with care and every detail in mind",
  },
  {
    id: 2,
    icon: "mobile",
    title: "Elite Quality",
    content: "Built with care and every detail in mind",
  },
  {
    id: 3,
    icon: "shield",
    title: "Elite Quality",
    content: "Built with care and every detail in mind",
  },
];

const STEPS = [
  {
    id: "f1",
    icon: "star-o",
    color: "#EEBC5A",
    title: "Find your Style",
    content:
      "We included multiple styles you can choose to match your exact project needs",
  },
  {
    id: "f2",
    icon: "headphones",
    color: "#5689D6",
    title: "Paste your Blocks",
    content:
      "We've included multiple styles you can choose to match your exact project needs",
  },
  {
    id: "f3",
    icon: "check-circle-o",
    color: "#9BC167",
    title: "Publish your Page",
    content:
      "We've included multiple styles you can choose to match your exact project needs",
  },
];

const USERS = [
  { id: "u1", link: require("../assets/avatar.png"), name: "Jane" },
  { id: "u2", link: require("../assets/avatar.png"), name: "Jane" },
  { id: "u3", link: require("../assets/avatar.png"), name: "Jane" },
  { id: "u4", link: require("../assets/avatar.png"), name: "Jane" },
  { id: "u5", link: require("../assets/avatar.png"), name: "Jane" },
  { id: "u6", link: require("../assets/avatar.png"), name: "Jane" },
];
const PRODUCTS = [
  { id: "u1", link: require("../assets/avatar.png"), content: "Classic elegant and powerfull. A best seller" },
  { id: "u2", link: require("../assets/avatar.png"), content: "A best seller, elegant multi use design" },
  { id: "u3", link: require("../assets/avatar.png"), content: "Jane" },
  { id: "u4", link: require("../assets/avatar.png"), name: "Jane" },
  { id: "u5", link: require("../assets/avatar.png"), name: "Jane" },
  { id: "u6", link: require("../assets/avatar.png"), name: "Jane" },
];

const Home = ({ props }) => {

  const itemProduct = (item) => {
    return (
      <View style={styles.itemProduct}>
         <Image source={item.link} style={{width: 140,height: 300}} />
       <Text style={{marginTop: 20,marginBottom: 20}}>{item.content}</Text>
       <Button style={styles.btnProduct}>
         <Text>View</Text>
       </Button>
      </View>
    )
  }
  const itemUser = (item) => {
    return (
      <View style={styles.itemUser}>
        <Image source={item.link} style={styles.avatar} />
        {/* source={item.link} style={styles.avatar} */}
        <Text style={{ marginTop: 10 }}>{item.name}</Text>
      </View>
    );
  };
  const itemStep = (item) => {
    return (
      <View style={styles.itemStep}>
        <FontAwesome
          name={item.icon}
          size={32}
          color={item.color}
          style={{ marginRight: 10 }}
        />
        <View>
          <Text style={styles.readyName}>{item.title}</Text>
          <Text>{item.content}</Text>
        </View>
      </View>
    );
  };
  const itemBuild = (item) => {
    return (
      <View style={styles.itemBuild}>
        <FontAwesome name={item.icon} size={30} color="blue" />
        <Text style={{ marginLeft: 10 }}>{item.name}</Text>
      </View>
    );
  };
  const itemFeature = (item) => {
    return (
      <View style={styles.itemFeature}>
        <FontAwesome name={item.icon} size={50} color="blue" />
        <View style={styles.titleFeature}>
          <Text style={styles.readyName}>{item.title}</Text>
          <Text>{item.content}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.statusBarBackground}></View>
      <ScrollView alwaysBounceVertical={true}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titleHeader}>Good Morning Edabit</Text>
            <Image source={linkImage} style={styles.avatar} />
          </View>
          <View style={styles.contentSlider}>
            <Image source={linkImage} style={styles.imageMiddle}></Image>
            <Text style={styles.labelTitle}>BeYong Powfull</Text>
            <Text style={styles.text}>
              Azure is mobile web appkit,Support PMA navite Darkmode
            </Text>
          </View>
          <View style={styles.btnGroup}>
            <Button style={styles.btnPurchare}>
              <Text>Purchare</Text>
            </Button>
            <Button style={styles.btnContact}>
              <Text style={styles.titleContact}>Contact Us</Text>
            </Button>
          </View>
          <View style={styles.quality}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Qualitys Features
            </Text>
            <Text style={{ color: "blue" }}>View All</Text>
          </View>
          <View style={styles.listItem}>
            <FlatList
              data={LISTFEATURE}
              horizontal={true}
              renderItem={({ item }) => itemFeature(item)}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.builded}>
            <View style={styles.buildText}>
              <Text style={styles.titleBuild}>Built For You</Text>
              <Text style={styles.contentTitle}>
                Our product suit your website, running increate fast and provide
                an unmatched UX and UI
              </Text>
            </View>
            <View style={styles.listBuilt}>
              <FlatGrid
                itemDimension={130}
                data={data}
                renderItem={({ item }) => itemBuild(item)}
              />
            </View>
          </View>
          <View>
            <View style={styles.ready}>
              <Text style={styles.titleReady}>Ready in 3 steps</Text>
              <Text>
                Our products are designed to sinpljfy thw way you code a page,
                with fucus on easy, copy and paste
              </Text>
              <FlatList
                data={STEPS}
                renderItem={({ item }) => itemStep(item)}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
          <View style={styles.testMonial}>
            <Text style={{ color: "white", fontSize: 16 }}>
              This is a great product Many conponents that we can use, and i
              really appceacite the support from Enabled. Very responsive and
              provides great solutions
            </Text>
            <Text style={{ color: "#89ABDF", marginTop: 20 }}>
              Envato Customer
            </Text>
            <Button style={styles.btnMonial}>
              <Text>View TestImonials</Text>
            </Button>
          </View>
          <View style={styles.customer}>
            <View style={styles.titleCustomer}>
              <Text style={styles.readyName}>Happy Customer</Text>
              <TouchableHighlight>
                <Text style={{ color: "blue" }}>View All</Text>
              </TouchableHighlight>
            </View>
            <Text>
              Over 30,000 people use our product, and we're always happy to see
              the posi impact our product have had! Thank you
            </Text>
            <View>
              <FlatList
                data={USERS}
                renderItem={({ item }) => itemUser(item)}
                horizontal={true}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
          <View style={styles.product}>
            <View style={styles.titleCustomer}>
              <Text style={styles.readyName}>Happy Customer</Text>
              <TouchableHighlight>
                <Text style={{ color: "blue" }}>View All</Text>
              </TouchableHighlight>
            </View>
            <FlatList 
              data ={PRODUCTS}
              horizontal={true}
              renderItem = {({item}) => itemProduct(item)}
              keyExtractor = {(item) => item.id}
            />
          </View>
          <View style={styles.youKnow}>
            <Text style={styles.labelYouKnow}>Did you know ?</Text>
            <Text style={{color: 'white'}}> We're the top selling Mobile Author on Envato. We value the quality of product and efficiency of our support</Text>
          </View>
          <View style={styles.purchase}>
          <Feather name="gift" size={50} color="pink" />
          <Text style={styles.titleReady}>Purchase Today</Text>
          <Text style={{color: 'blue', marginBottom: 20}}>Quality and Premium Features for You</Text>
          <Text> Fast, easy to use and filted with features. Give your site the Mobile Feeling it deserves</Text>
          <Button style={styles.btnBuy}><Text>Buy Now- 25$</Text></Button>
          </View>
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  
  
  btnBuy: {
    marginTop: 20,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5689D6',
  },
  purchase: {
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: theme.sizes.base,
    padding: 20,
  },
  labelYouKnow: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  youKnow: {
    borderRadius: 20,
    backgroundColor: '#5689D6',
    padding: 20,
    marginHorizontal: theme.sizes.base,
  },
  btnProduct: {
    backgroundColor: '#5689D6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemProduct: {
    borderRadius: 10,
    padding: 10,
    width: 160,
    marginRight: 20,
    backgroundColor: 'white'
  },
  product: {
    marginHorizontal: theme.sizes.base,
    marginTop: 20,
    marginBottom: 20,
  },
  itemUser: {
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 16,
    alignItems: "center",
    marginTop: 20,
  },
  titleCustomer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  customer: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "white",
    marginTop: 20,
    marginHorizontal: theme.sizes.base,
  },
  btnMonial: {
    marginTop: 30,
    borderColor: "white",
    backgroundColor: "#5689D6",
    borderWidth: 1,
  },
  testMonial: {
    borderRadius: 10,
    marginHorizontal: theme.sizes.base,
    backgroundColor: "#5689D6",
    marginTop: 20,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  titleFeature: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  readyName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemStep: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  titleReady: {
    justifyContent: "center",
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    marginBottom: 10,
  },
  ready: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "column",
    marginHorizontal: theme.sizes.base,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  itemBuild: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  listBuilt: {
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "white",
    margin: 10,
    marginBottom: 30,
    // display: grid,
  },
  contentTitle: {
    color: "white",
  },
  buildText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
  titleBuild: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  builded: {
    marginTop: 20,
    backgroundColor: "#0587CE",
    padding: 10,
  },
  btnPurchare: {
    //flex: 1,
    // width: 500,
    backgroundColor: "#5689D6",
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContact: {
    color: "#5B8BD6",
  },
  btnContact: {
    backgroundColor: "white",
    borderColor: "#5B8BD6",
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#5B8BD6",
    borderWidth: 1,
  },
  listItem: {
    flexDirection: "row",
    paddingHorizontal: theme.sizes.base,
  },
  itemFeature: {
    width: 150,
    height: 200,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowRadius: 2,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    // backgroundColor : "#0000"
  },

  quality: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: theme.sizes.base * 2,
  },
  customButton: {
    borderRadius: 5,
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  btnGroup: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: theme.sizes.base * 2,
  },
  text: {
    color: "#585858",
    fontSize: 16,
    padding: 10,
  },
  imageMiddle: {
    width: 130,
    height: 130,
    alignItems: "center",
  },
  labelTitle: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
  },
  contentSlider: {
    justifyContent: "center",
    alignItems: "center",
    height: 350,
    flexDirection: "column",
    // width: 350,
    borderRadius: 30,
    backgroundColor: "violet",
    shadowColor: "black",
    backgroundColor: "#ffffff",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 2,
    shadowOpacity: 0.8,
    marginHorizontal: theme.sizes.base * 2,
  },
  container: {
    flexDirection: "column",
    backgroundColor: "#EFEFEF",
    marginBottom: 50,
  },
  header: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: theme.sizes.base * 2,
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
  statusBarBackground: {
    height: Platform.OS === "ios" ? 30 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
    backgroundColor: "white",
  },
  avatar: {
    height: theme.sizes.base * 3,
    width: theme.sizes.base * 3,
  },
});
