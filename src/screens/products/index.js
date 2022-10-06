import React, { useEffect } from "react";
import { Text, View, Button, FlatList } from "react-native";
import { styles } from "./styles";
import { ProductItem } from "../../components";

//import { products } from "../../constants/data";
import { useSelector, useDispatch } from "react-redux";
import {
  filteredProducts,
  selectedProduct,
} from "../../store/actions/products.actions";

const Products = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.category.selected);

  const productsFiltered = useSelector(
    (state) => state.products.filteredProducts
  );

  useEffect(() => {
    dispatch(filteredProducts(selectedCategory.id));
  }, []);

  const onSelected = (item) => {
    dispatch(selectedProduct(item.id));
    navigation.navigate("Product", { name: item.title });
  };
  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  );

  return (
    <FlatList
      data={productsFiltered}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Products;
