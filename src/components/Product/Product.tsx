import React, { useContext } from "react";
import "./Product.css";
import { AppContext } from "@/context/AppContext";
import data from "@/assets/en.json";
import useFetchProduct from "@/hooks/useApiService";
import { Products } from "@/types/app";

const URL =
  "https://equalexperts.github.io/frontend-take-home-test-data/products.json";

function Product() {
  const { setCart } = useContext(AppContext);
  const state = useFetchProduct<Products[]>(URL);
  const products = state.data || [];

  function addToCart(product: Products) {
    setCart((cart) => {
      const existingItem = cart.find((item) => item.id === product.id);
      if (existingItem) {
        return cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...cart, { ...product, quantity: 1 }];
      }
    });

    products.map((p) => {
      if (p.id === product.id) {
        p.quantity = p.quantity ? p.quantity + 1 : 1;
      }
    });
  }

  if (state.loading === true) {
    return <div className="loading">Loading...</div>;
  }
  if (state.error) {
    return <div className="loading">Error loading products.</div>;
  }

  return (
    <div className="product-grid">
      {products &&
        products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <div className="card-content">
              <div>
                <h3>{product.title}</h3>
                <div className="price">${product.price}</div>
              </div>
              <p>{product.description}</p>

              {!product.quantity && (
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(product)}
                >
                  {data.actions.addToCart}
                </button>
              )}
              {product.quantity && product.quantity > 0 && (
                <button
                  className="added-to-cart-button"
                  onClick={() => addToCart(product)}
                >
                  {product.quantity} {data.actions.addedToCart}
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Product;
