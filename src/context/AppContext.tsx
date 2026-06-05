import useFetchProduct from "@/hooks/useApiService";
import { Cart, Products, ProductState } from "@/types/app";
import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
// import { cartReducer } from "./Reducers";
import t from "@/assets/en.json";

const AppContext = createContext<{
  state: ProductState<Products[]>;
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[]>>;
}>({
  state: {
    data: null,
    loading: true,
    error: null,
  },
  cart: [],
  setCart: () => undefined,
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const state = useFetchProduct<Products[]>(t.productUrl);
  const contextValue = {
    state,
    cart,
    setCart,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export { AppProvider, AppContext };
