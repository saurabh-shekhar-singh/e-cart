import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "@/App";
import { AppProvider } from "@/context/AppContext";

jest.mock("@/hooks/useApiService", () => ({
  __esModule: true,
  default: jest.fn(),
}));
import useFetchProduct from "@/hooks/useApiService";
import { Products } from "@/types/app";

describe("Integration: add product from home and see it in cart", () => {
  const product = {
    id: 42,
    title: "Integration Product",
    price: 3.5,
    description: "Integration test product",
    image: "prod.png",
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

  it("adds the product from home and shows it in cart with correct quantity", async () => {
    render(
      <AppProvider>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </AppProvider>,
    );

    const addButton = await screen.findByText(/Add to Cart/i);
    fireEvent.click(addButton);
    // Increment by 1
    const addedButton = await screen.findByText(/Added to Cart/i);
    fireEvent.click(addedButton);

    // Navigate to cart
    const cartImg = screen.getByAltText("Shopping Cart");
    const cartLink = cartImg.closest("a") as HTMLAnchorElement;
    fireEvent.click(cartLink);

    expect(await screen.findByText("Integration Product")).toBeInTheDocument();
    const itemNode = screen
      .getByText("Integration Product")
      .closest(".item") as HTMLElement;
    const qty = within(itemNode).getByText("2");
    expect(qty).toBeInTheDocument();
  });
});
