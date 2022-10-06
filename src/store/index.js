import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productsReducer, categoryReducer, cartReducer } from "./reducers";

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
