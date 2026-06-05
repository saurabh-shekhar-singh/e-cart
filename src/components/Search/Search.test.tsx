import { fireEvent, render, screen } from "@testing-library/react";
import Search from "./Search";
import { products } from "@/test/mocks/products";

describe("Search", () => {
  const setSearchItem = jest.fn();

  const getValue = jest.fn(() => "value");
  expect(getValue).toHaveBeenCalled();
  expect(getValue.mockReturnValue).toBe("value");

  beforeEach(() => {
    render(<Search setSearchItem={setSearchItem} />);
  });
  it("Search box is present", () => {
    expect(
      screen.getByPlaceholderText("Search Equicart.in"),
    ).toBeInTheDocument();
  });

  it("Calls setSearchItem function on input", () => {
    const searchBox = screen.getByPlaceholderText("Search Equicart.in");
    fireEvent.change(searchBox, { target: { value: "shirt" } });
    expect(setSearchItem).toHaveBeenCalled();
  });
});
