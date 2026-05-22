import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Product from "./Product";
import { AppContext } from "@/context/AppContext";

// Mock the fetch hook used inside the component
jest.mock("@/hooks/useApiService", () => ({
  __esModule: true,
  default: jest.fn(),
}));

import useFetchProduct from "@/hooks/useApiService";
import { Products } from "@/types/app";

describe("Product component", () => {
  const product = {
    id: 1,
    title: "Test Product",
    price: 9.99,
    description: "A test product",
    image: "test.png",
  } as Products;

  beforeEach(() => {
    (useFetchProduct as jest.Mock).mockReturnValue({
      data: [product],
      loading: false,
      error: null,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders products and calls setCart when adding to cart", () => {
    const setCart = jest.fn();

    render(
      <AppContext.Provider value={{ setCart } as any}>
        <Product />
      </AppContext.Provider>,
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();

    const addButton = screen.getByText(/Add to Cart/i);
    fireEvent.click(addButton);

    expect(setCart).toHaveBeenCalled();
  });
});
