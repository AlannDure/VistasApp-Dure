import React, { useState } from "react";
import { useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

//import ShopNavigator from "./shop";
import Tabs from "./tabs";
import AuthNavigator from "./auth";

const AppNavigation = () => {
  const userId = useSelector((state) => state.auth.userId);

  return (
    <NavigationContainer>
      {/*       <ShopNavigator />
       */}
      {userId ? <Tabs /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;
