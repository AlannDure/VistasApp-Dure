import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./cart";
import ShopNavigator from "./shop";
import OrdersNavigator from "./orders";
import { colors } from "../constants/themes";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTAB"
      screenOptions={{
        headerShown: false,
        color: colors.primary,
      }}
    >
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: "Shop",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={22}
              color={colors.primary}
            />
          ),
        }}
      ></BottomTab.Screen>

      <BottomTab.Screen
        name="OrderTab"
        component={OrdersNavigator}
      ></BottomTab.Screen>

      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
      ></BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

export default Tabs;
