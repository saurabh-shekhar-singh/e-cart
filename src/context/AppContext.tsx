import { Cart } from "@/types/app";
import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
// import { cartReducer } from "./Reducers";

const AppContext = createContext<{
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[]>>;
}>({
  cart: [],
  setCart: () => undefined,
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart[]>([]);
  //   const [state, dispatch] = useReducer(cartReducer, {
  //     products: [],
  //     cart: [],
  //   });

  const contextValue = {
    cart,
    setCart,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export { AppProvider, AppContext };
