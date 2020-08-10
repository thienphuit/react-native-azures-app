import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";
import Home from "../screens/Home";
import MediaScreen from "../screens/MediaScreen";
import FeatureScreen from "../screens/FeaturesScreen";
import Pages from "../screens/Pages";
import Settings from "../screens/Settings";
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { BottomTabs } from "./bottomTab";

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator(
);
const RootStack = createStackNavigator();
const RootStackScreen = () =>(
  <RootStack.Navigator>
    <RootStack.Screen  component={BottomTabs}/>
  </RootStack.Navigator>
)

const HomeStackScreen = () => (
  <HomeStack.Navigator
 // initialRouteName="Pages"
  screenOptions={{
  // headerShown: false,
    headerBackTitleVisible: true,
    //headerBackImage: <GoBack />,
   // headerLeft:
  }}
  
  >
    <HomeStack.Screen name="Home" component={Home} 
    // options={{
    //   headerLeft: (props) => (
    //     <HeaderBackButton
    //       {...props}
    //       onPress={() => {
    //         // Do something
    //       }}
    //     />
    //   ),
    // }}
    />
   
    {/* <HomeStack.Screen name="Media" component={MediaScreen} />
    <HomeStack.Screen name="Features" component={FeatureScreen} />
    <HomeStack.Screen name="Media" component={MediaScreen} />
    <HomeStack.Screen name="Media" component={MediaScreen} /> */}
  </HomeStack.Navigator>
);
export default () => (
  <NavigationContainer>
    <BottomTabs />
  </NavigationContainer>
  // <NavigationContainer>
  //   <Tabs.Navigator initialRouteName="Home">
  //     <Tabs.Screen name="Feature" component={FeatureScreen}
  //       options={{
  //           tabBarLabel: 'Feature',
  //           tabBarIcon: ({color}) => (
  //             <Ionicons name="ios-heart-empty" size={26} color="red" />
  //           ),
  //         }}
  //     ></Tabs.Screen>
  //     <Tabs.Screen name="MediA" component={MediaScreen}
  //       options={{
  //         tabBarIcon: ({color}) =>(
  //           <Octicons name="file-media" size={24} color="#B3CF91" />
  //         )
  //       }}
  //     ></Tabs.Screen>
  //     <Tabs.Screen name="Home" component={HomeStackScreen}
  //       options={{
  //         tabBarLabel: 'Home',
  //         tabBarIcon: ({color}) => (
  //           <AntDesign name="home" size={24} color="skyblue" />
  //         ),
  //       }}
  //     ></Tabs.Screen>
  //     <Tabs.Screen name="Pages" component={Pages}
  //      options={{
  //       tabBarLabel: 'Page',
  //       tabBarIcon: ({color}) => (
  //         <Foundation name="page" size={24} color="#AC977A" />
  //       ),
  //     }}></Tabs.Screen>
  //     <Tabs.Screen name="Settings" component={Settings}
  //      options={{
  //       tabBarLabel: 'Settings',
  //       tabBarIcon: ({color}) => (
  //         <Feather name="settings" size={24} color="black" />
  //       ),
  //     }}
  //     ></Tabs.Screen>
  //   </Tabs.Navigator>
  // </NavigationContainer>
);
