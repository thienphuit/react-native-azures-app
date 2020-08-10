import React, { Component } from "react";
import CardView from "../components/CardView";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import { theme } from "../common";
import Footer from "../screens/Footer";
import { FontAwesome, Feather, Entypo } from "@expo/vector-icons";

const LISTMEDIA = [
  {icon: 'dollar', title: 'Ad Boxes', content: 'Built to the better', color: 'green'},
  {icon: 'mobile', title: 'Ad Show onScroll', content: 'Showing under your Content'},
  {icon: 'clock-o', title: 'Ads with Timers', content: 'Showing Full or Modal Boxes'},
  {icon: 'mobile', title: 'Add To Home', content: 'Invite Visitors to add to Their Homepage'},
  {icon: 'mobile', title: 'Ad Boxes', content: 'Built to the better'},
  {icon: 'mobile', title: 'Ad Boxes', content: 'Built to the better'}
]
export default class MediaScreen extends Component {
  state = {
    pokeList: []
  }
  async componentDidMount() {
    //Have a try and catch block for catching errors.
    try {
        //Assign the promise unresolved first then get the data using the json method. 
        const pokemonApiCall = await fetch('http://localhost:3000/api/products');
        const pokemon = await pokemonApiCall.json();
        console.log("pokemon", pokemon);
        this.setState({pokeList: pokemon, loading: false});
    } catch(err) {
        console.log("Error fetching data-----------", err);
    }
}
  itemMedia = item => {
      return (
        <View>
          <View style={styles.itemFeature}>
         
          <FontAwesome name={item.icon} size={32} color={item.color} />
          <View style={{marginLeft: 10}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={{color: '#c9ced3'}}>{item.content}</Text>
          </View>
          <Entypo name="chevron-small-right" size={24} color="black" />
          </View>
          <View style={styles.dashLine}></View>
        </View>
        )

  }
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
            <CardView >
              <Text style={{ lineHeight: 30, fontSize: 16 }}>
                Components are the founding elements of our products, and shared
                among all of them, with unique pages to match style of the
                product
              </Text>
            </CardView>
            <View>
             <CardView >
             <FlatList 
              data ={LISTMEDIA}
              alwaysBounceVertical={true}
              renderItem ={({item}) => this.itemMedia(item)}
              keyExtractor = {(item) => item.id}
              />
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
