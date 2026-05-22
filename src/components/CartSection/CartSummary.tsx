import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

function CartSummary() {
  const { cart } = useContext(AppContext);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <aside className="summary">
      <h3>Summary</h3>
      <div className="summary-line">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-line">
        <span>Standard Logistics</span>
        <span>Complimentary</span>
      </div>
      <div className="summary-line">
        <span>Estimated Tax</span>
        <span>Calculated at next step</span>
      </div>
      <hr />
      <div className="summary-total">
        <span>Total</span>
        <h3>$1,700.00</h3>
      </div>
      <button className="checkout">Proceed to Checkout →</button>
      <p className="note">
        Secure 256‑bit quantum encryption applied to all transactions.
      </p>
    </aside>
  );
}

export default CartSummary;
