import React, { useContext } from "react";
import "./Product.css";
import { AppContext } from "@/context/AppContext";
import data from "@/assets/en.json";
import { Products } from "@/types/app";
import { getStarRating } from "@/utils/product";

function Product({
  products,
  openProductModal,
}: {
  products: Products[];
  openProductModal: (product: Products) => void;
}) {
  const { setCart } = useContext(AppContext);

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

  return (
    <div className="product-grid" data-testid="product-list">
      {products &&
        products.map((product) => (
          <div key={product.id} className="card" data-testid="product">
            <img src={product.image} alt={product.title} />
            <div className="card-content">
              <div>
                <h3 onClick={() => openProductModal(product)}>
                  {product.title}
                </h3>
                <div className="price-rating">
                  <span className="price">${product.price}</span>
                  <span
                    className={`rating star-mini-${getStarRating(product.rating.rate)}`}
                  ></span>
                </div>
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
