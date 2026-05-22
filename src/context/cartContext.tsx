import { createContext } from "react";

const CartContext = createContext({
  cartItems: [],
  removeFromCart: (productId: number) => {},
  clearCart: () => {},
});

export default CartContext;