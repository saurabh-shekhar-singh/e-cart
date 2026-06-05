import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import CartSection from "./CartSection";
import { AppContext } from "@/context/AppContext";

describe("CartSection", () => {
  const createCartItem = (quantity = 2) => ({
    id: 1,
    title: "Test item in cart",
    price: 5,
    image: "img.png",
    quantity,
  });

  it("Renders cart item component", () => {
    const cart = [createCartItem()];
    const setCart = jest.fn();

    render(
      <AppContext.Provider value={{ cart, setCart } as any}>
        <CartSection />
      </AppContext.Provider>,
    );

    expect(screen.getByText("Test item in cart")).toBeInTheDocument();
  });

  it("Increases item quantity when + is clicked", () => {
    const cart = [createCartItem(2)];
    const setCart = jest.fn();

    render(
      <AppContext.Provider value={{ cart, setCart } as any}>
        <CartSection />
      </AppContext.Provider>,
    );

    const itemNode = screen
      .getByText("Test item in cart")
      .closest(".item") as HTMLElement;
    const plus = within(itemNode).getByText("+");
    fireEvent.click(plus);

    expect(setCart).toHaveBeenCalled();
    const newCart = setCart.mock.calls[0][0];
    expect(Array.isArray(newCart)).toBe(true);
    expect(newCart[0].quantity).toBe(3);
  });

  it("Decreases item quantity and removes when quantity reaches 0", () => {
    // case: quantity 1 => clicking - removes item
    const cart = [createCartItem(1)];
    const setCart = jest.fn();

    render(
      <AppContext.Provider value={{ cart, setCart } as any}>
        <CartSection />
      </AppContext.Provider>,
    );

    const itemNode = screen
      .getByText("Test item in cart")
      .closest(".item") as HTMLElement;
    const minus = within(itemNode).getByText("-");
    fireEvent.click(minus);

    expect(setCart).toHaveBeenCalled();
    const newCart = setCart.mock.calls[0][0];
    expect(Array.isArray(newCart)).toBe(true);
    expect(newCart.length).toBe(0);
  });

  it("Removes item when Remove is clicked", () => {
    const cart = [createCartItem(2)];
    const setCart = jest.fn();

    render(
      <AppContext.Provider value={{ cart, setCart } as any}>
        <CartSection />
      </AppContext.Provider>,
    );
    const itemNode = screen
      .getByText("Test item in cart")
      .closest(".item") as HTMLElement;
    const remove = within(itemNode).getByText(/Remove/i);
    fireEvent.click(remove);

    expect(setCart).toHaveBeenCalled();
    const newCart = setCart.mock.calls[0][0];
    expect(Array.isArray(newCart)).toBe(true);
    expect(newCart.length).toBe(0);
  });
});
