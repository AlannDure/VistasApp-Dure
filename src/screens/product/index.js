import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";

const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Product Screen</Text>
      <Button
        title="To Categories ->"
        onPress={() => {
          navigation.navigate("Categories");
        }}
      />
    </View>
  );
};

export default Product;
