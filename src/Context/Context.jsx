import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

const Cart = createContext();
const initialState = {
  cart: []
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};
const CartState = () => {
  const useCart = useContext(Cart);
  return useCart;
};
export { CartProvider, CartState };
