import React from "react";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import AppNavigator from "./src/navigation";

export default function App() {
  const [loaded] = useFonts({
    Opensans: require("./assets/fonts/OpenSans-Regular.ttf"),
    OpensansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return <AppNavigator />;
}
