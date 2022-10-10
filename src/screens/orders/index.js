import React, { useCallback } from "react";
import { View, Text, FlatList } from "react-native";
import { OrderItem } from "../../components";
//import { orders } from "../../constants/data";
import { styles } from "./styles";
import { deleteOrder, getOrders } from "../../store/actions/orders.action";
import { useSelector, useDispatch } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

const Orders = ({ navigation }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  const onCancel = (id) => {
    // console.warn(id);
    dispatch(deleteOrder(id));
  };
  const renderItem = ({ item }) => (
    <OrderItem item={item} onCancel={onCancel} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Orders;
