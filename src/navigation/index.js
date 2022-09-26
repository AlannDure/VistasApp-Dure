import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ShopNavigator from "./shop";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
