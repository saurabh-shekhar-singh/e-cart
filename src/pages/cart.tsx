import CartSection from "@/components/CartSection/CartSection";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useContext(AppContext);
  if (cart.length === 0) {
    return (
      <main className="container">
        <h1 className="cart-empty">
          No item in the cart.. <Link to="/">Proceed to shopping</Link>
        </h1>
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
