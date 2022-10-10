import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
//import { products } from "../../constants/data";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cart.actions";

const Product = ({ navigation, route }) => {
  //const { productId } = route.params;
  //const product = products.find((product) => product.id === productId);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  const addCartItem = () => {
    dispatch(addToCart(product));
  };

  const { id, title, description, price, weight } = product || {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ID: {id}</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text style={styles.price}>${price}</Text>
      <Text>weight: {weight}</Text>
      <Button color={"#7A9E9F"} title="ADD TO CART" onPress={addCartItem} />
    </View>
  );
};

export default Product;
