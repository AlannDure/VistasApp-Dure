import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, Product } from "../screens";
import { colors } from "../constants/themes";
const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontFamily: "OpensansBold",
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "Categorias",
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
