import React from "react";
import { Image } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { AppStackNavigator } from "./AppStackNavigator";
import RegisterScreen from "../screens/RegisterScreen";

export const AppTabNavigator = createBottomTabNavigator({
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/injection3.png")}
          style={{ width: 34, height: 34 }}
        />
      ),
      tabBarLabel: "Register",
    },
  },
  Status: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/virus1.png")}
          style={{ width: 34, height: 34 }}
        />
      ),
      tabBarLabel: "Status",
    },
  },
});
