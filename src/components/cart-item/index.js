import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants/themes";
import { Ionicons } from "@expo/vector-icons";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.name}>Name: {item.name}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
