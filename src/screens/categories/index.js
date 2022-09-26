import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";

const Categories = ({ navigation }) => {
  console.log("look", navigation);
  return (
    <View style={styles.container}>
      <Text>Category Screen</Text>
      <Button
        title="To Products ->"
        onPress={() => {
          navigation.navigate("Products");
        }}
      />
    </View>
  );
};

export default Categories;
