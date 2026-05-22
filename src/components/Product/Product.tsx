import React, { useContext, useEffect } from "react";
import "./Product.css";
import { AppContext } from "@/context/AppContext";
import data from "@/assets/en.json";
import useFetchProduct from "@/hooks/useApiService";

// const products = [
//   {
//     productName: "Cortex Link V2",
//     productDescription:
//       "Next‑generation non‑invasive neural bridge for hands‑free control. Comfortable temple‑to‑occipital fit with adaptive cooling for all‑day wear.",
//     productPrice: "$899.00",
//     productId: "CLV2-001",
//     productUrl: "../../public/Cortex_Link_V2.png",
//   },
//   {
//     productName: "Q‑Core Nano",
//     productDescription:
//       "Pocketable neural coprocessor for private, on‑device AI acceleration. Rugged microchip module with magnetic dock and encrypted local models.",
//     productPrice: "$1,250.00",
//     productId: "QCN-002",
//     productUrl: "../../public/Q‑Core_Nano.png",
//   },
//   {
//     productName: "Aura Monitor Ring",
//     productDescription:
//       "Minimal smart ring that tracks cognitive load and recovery in real time. Lightweight titanium band with continuous HRV, EDA, and motion sensing.",
//     productPrice: "$299.00",
//     productId: "AMR-003",
//     productUrl: "../../public/Aura_Monitor_Ring.png",
//   },
//   {
//     productName: "Synapse Lens",
//     productDescription:
//       "Ultra‑thin AR contact lens with micro‑LED HUD and attention cues. Invisible overlay for contextual prompts, micro‑notifications, and focus aids.",
//     productPrice: "$499.00",
//     productId: "SPL-004",
//     productUrl: "../../public/Synapse_Lens.png",
//   },
//   {
//     productName: "EchoPulse Patch",
//     productDescription:
//       "Discreet adhesive patch delivering micro‑vibrations to stabilize mood. Timed biofeedback and thermal micro‑pulses for stress reduction during tasks.",
//     productPrice: "$149.00",
//     productId: "EPP-005",
//     productUrl: "../../public/EchoPulse_Patch.png",
//   },
//   {
//     productName: "Lumen Haptic Glove",
//     productDescription:
//       "Precision haptic glove that translates digital signals into localized touch. Reads finger EMG for gesture control and delivers 16‑zone tactile feedback.",
//     productPrice: "$349.00",
//     productId: "LHG-006",
//     productUrl: "../../public/Lumen_Haptic_Glove.png",
//   },
//   {
//     productName: "Nebula Dock",
//     productDescription:
//       "Home AI nexus that aggregates sensors, charges devices, and runs edge AI. Privacy‑first hub with ambient display and multi‑modal sensor fusion.",
//     productPrice: "$699.00",
//     productId: "NBD-007",
//     productUrl: "../../public/Nebula_Dock.png",
//   },
//   {
//     productName: "MnemoBand Headband",
//     productDescription:
//       "Comfortable headband for targeted memory rehearsal and learning sessions. Programmable micro‑stimulation and timed cues to boost retention.",
//     productPrice: "$399.00",
//     productId: "MBH-008",
//     productUrl: "../../public/MnemoBand_Headband.png",
//   },
//   {
//     productName: "BioFlux Adaptive Sneakers",
//     productDescription:
//       "Smart sneakers that adapt sole stiffness and coach gait in real time. Embedded sensors analyze gait and metabolic output for optimized recovery.",
//     productPrice: "$219.00",
//     productId: "BAS-009",
//     productUrl: "../../public/BioFlux_Adaptive_Sneakers.png",
//   },
//   {
//     productName: "Spectra AR Pen",
//     productDescription:
//       "Precision stylus that projects AR annotations while capturing biometric pressure. Writes on physical surfaces and secures signatures with biometric verification.",
//     productPrice: "$179.00",
//     productId: "SAP-010",
//     productUrl: "../../public/Spectra_AR_Pen.png",
//   },
// ];

const URL =
  "https://equalexperts.github.io/frontend-take-home-test-data/products.json";

function Product() {
  const { cart, setCart } = useContext(AppContext);
  const state = useFetchProduct(URL);
  const products = state.data || [];

  function addToCart(product) {
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
        p.quantity = p.quantity + 1 || 1;
      }
    });
  }

  //   useEffect(() => {
  //     setProducts(state);
  //   }, [state]);
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
