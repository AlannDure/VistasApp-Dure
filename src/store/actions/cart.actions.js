import { orders } from "../../constants/data";
import { URL_API } from "../../constants/firebase";
import { cartTypes } from "../types/cart.types";

const { ADD_TO_CART } = cartTypes;
const { REMOVE_FROM_CART } = cartTypes;
const { CONFIRM_ORDER } = cartTypes;

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const confirmOrder = (order) => ({
  type: CONFIRM_ORDER,
  order,
});

export const confirmCart = (items, total) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/orders.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          items,
          total,
        }),
      });

      const result = await response.json();

      dispatch({
        type: CONFIRM_ORDER,
        result: result,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
