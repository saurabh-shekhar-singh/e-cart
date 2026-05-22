import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import t from "@/assets/en.json";

function CartSummary() {
  const { cart } = useContext(AppContext);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <aside className="summary">
      <h3>{t.cart.summary.title}</h3>
      <div className="summary-line">
        <span>{t.cart.summary.subtotal}</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-line">
        <span>{t.cart.summary.logistics}</span>
        <span>{t.cart.summary.logisticsValue}</span>
      </div>
      <div className="summary-line">
        <span>{t.cart.summary.estimatedTax}</span>
        <span>{t.cart.summary.estimatedTaxValue}</span>
      </div>
      <hr />
      <div className="summary-total">
        <span>{t.cart.summary.total}</span>
        <h3>${(subtotal + 0).toFixed(2)}</h3>
      </div>
      <button className="checkout">Proceed to Checkout →</button>
      <p className="note">{t.cart.summary.note}</p>
    </aside>
  );
}

export default CartSummary;
