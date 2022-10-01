import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//import ShopNavigator from "./shop";
import Tabs from "./tabs";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      {/*       <ShopNavigator />
       */}
      <Tabs />
    </NavigationContainer>
  );
};

export default AppNavigation;
