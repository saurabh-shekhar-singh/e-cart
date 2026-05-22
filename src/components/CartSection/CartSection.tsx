import { useContext } from "react";
import "./CartSection.css";
import CartSummary from "./CartSummary";
import { AppContext } from "@/context/AppContext";

function CartSection() {
  const { cart, setCart } = useContext(AppContext);
  const descreaseQuantity = (id: number) => {
    if (cart.find((item) => item.id === id)?.quantity === 1) {
      setCart(cart.filter((item) => item.id !== id));
      return;
    }
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  };
  const increaseQuantity = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  return (
    <main className="container">
      <section className="cart">
        <h1>Neural Cart</h1>
        <p className="subtitle">
          Review your selected components prior to checkout.
        </p>

        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="items">
              <div className="item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="details">
                  <h3>{item.title}</h3>
                  <div className="actions">
                    <div className="quantity">
                      <button onClick={() => descreaseQuantity(item.id)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                    <button
                      className="remove"
                      onClick={() =>
                        setCart(cart.filter((i) => i.id !== item.id))
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CartSummary />
    </main>
  );
}

export default CartSection;
