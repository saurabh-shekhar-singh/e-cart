import React from "react";
import "./ProductModal.css";
import { Products } from "@/types/app";

function ProductModal({
  product,
  setShowModal,
}: {
  product: Products;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div data-testid="product-modal" className="product-modal">
      <span className="close-modal" onClick={() => setShowModal(false)}>
        &#10006;
      </span>
      <div className="modal-container">
        <div className="product-image">
          <img height="100px" src={product.image} alt={product.title} />
        </div>
        <div className="product-description">{product.title}</div>
      </div>
    </div>
  );
}

export default ProductModal;
