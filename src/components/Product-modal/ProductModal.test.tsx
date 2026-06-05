import { render, screen } from "@testing-library/react";

import ProductModal from "./ProductModal";
import Content from "@/layouts/Content/Content";

describe("Product modal", () => {
  const setShowModal = jest.fn();
  const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image:
      "https://equalexperts.github.io/frontend-take-home-test-data/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  // Product modal to be present
  it("Product modal to be present", () => {
    render(<ProductModal product={product} setShowModal={setShowModal} />);
    const productModalElement = screen.getByTestId("product-modal");
    expect(productModalElement).toBeInTheDocument();
  });
  // Product modal to be not present
  it("Product modal to be not present", () => {
    render(<Content />);
    const productModalElement = screen.queryByTestId("product-modal");
    expect(productModalElement).not.toBeInTheDocument();
  });
  // Product modal to have details of the selected product
  it("Should have details of the selected product", () => {
    render(<ProductModal product={product} setShowModal={setShowModal} />);
    const productModalElement = screen.getByText(product.title);
    expect(productModalElement).toBeInTheDocument();
  });
  // Add to cart from Product modal
  // Remove from cart from Product modal
  // Go to cart from Product modal
  // Show quantity of same product already added to cart

  // Open modal without Product data
  // Multiple click to open product modal - to be moved to content test file
});
