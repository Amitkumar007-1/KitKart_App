const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id != action.payload.id)
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id == action.payload.id) {
            return { ...product, qty: (product.qty += 1) };
          } else return product;
        })
      };
    case "DECREASE_QUANTITY":
      if (action.payload.qty == 1) {
        return state;
      } else {
        return {
          ...state,
          cart: state.cart.map((product) => {
            if (product.id == action.payload.id) {
              return { ...product, qty: (product.qty -= 1) };
            } else return product;
          })
        };
      }

    default:
      return state;
  }
};
export { CartReducer };
