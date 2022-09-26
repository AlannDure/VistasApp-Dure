import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products Screen</Text>
      <Button
        title="To Product ->"
        onPress={() => {
          navigation.navigate("Product");
        }}
      />
    </View>
  );
};

export default Products;
