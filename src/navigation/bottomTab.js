import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import MediaScreen from "../screens/MediaScreen";
import FeatureScreen from "../screens/FeaturesScreen";
import Pages from "../screens/Pages";
import Settings from "../screens/Settings";

const Tabs = createBottomTabNavigator();
const TabStack = createBottomTabNavigator();

export const BottomTabs = ({ props }) => {
  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen
        name="Feature"
        component={FeatureScreen}
        
        options={{
          tabBarLabel: "Feature",
          // headerLeft : () => {
          //   return (
          //     <TouchableOpacity 
          //       style={{
          //         paddingHorizontal: 10
          //       }}
          //       onPress={() => navigation.toggleDrawer()}
          //     >
          //       <Ionicons
          //           name="ios-menu"
          //           size={40}
          //           color={"#000"}
          //       />
          //     </TouchableOpacity>
          //   )
          // },
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-heart-empty" size={26} color="red" />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="MediA"
        component={MediaScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="file-media" size={24} color="#B3CF91" />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="skyblue" />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Pages"
        component={Pages}
        options={{
          tabBarLabel: "Page",
          tabBarIcon: ({ color }) => (
            <Foundation name="page" size={24} color="#AC977A" />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color="black" />
          ),
        }}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
};
export default TabStack;
