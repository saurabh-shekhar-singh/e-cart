import { createContext, useState } from "react";
// import { cartReducer } from "./Reducers";

const AppContext = createContext({
  cart: [],
  setCart: (c) => {},
});

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
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
