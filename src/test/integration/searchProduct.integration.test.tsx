import App from "@/App";
import { AppProvider } from "@/context/AppContext";
import useFetchProduct from "@/hooks/useApiService";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { products } from "../mocks/products";

jest.mock("@/hooks/useApiService", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Integration: Search a product and see the filtered product list", () => {
  beforeEach(() => {
    (useFetchProduct as jest.Mock).mockReturnValue({
      data: products,
      loading: false,
      error: null,
    });
  });

  it("Search a product in the searchbox and filter the products", () => {
    render(
      <AppProvider>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </AppProvider>,
    );

    const searchBox = screen.getByPlaceholderText("Search Equicart.in");
    fireEvent.change(searchBox, { target: { value: "shirt" } });

    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes("shirt");
    });

    const productNodes = screen.getAllByTestId("product");
    expect(filteredProducts.length).toBe(productNodes.length);

    filteredProducts.map((products) => {
      const filteredNode = productNodes.filter((node) => {
        return within(node).getByRole("heading").textContent === products.title;
      });
      expect(filteredNode.length).toBe(1);
    });
  });
});
