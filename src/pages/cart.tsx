import CartSection from "@/components/CartSection/CartSection";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

function Cart() {
  const { cart } = useContext(AppContext);
  if (cart.length === 0) {
    return (
      <main className="container">
        <h1>No item in the cart.. Proceed to shopping</h1>
      </main>
    );
  }
  return (
    <>
      <CartSection />
    </>
  );
}

export default Cart;
