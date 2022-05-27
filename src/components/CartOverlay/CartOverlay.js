import React, { Component } from "react";
import Context from "../../context/context";
// Style
import { Cart, Overlay } from "./CartOverlay.styles";
// Component
import SelectedProduct from "../SelectedProduct/SelectedProduct";
import CartPage from "../pages/CartPage/CartPage";

export default class CartOverlay extends Component {
  static contextType = Context;
  render() {
    const { currencies } = this.context;
    // All selected Products
    const selectedProducts =
      JSON.parse(localStorage.getItem("SelectedProducts")) &&
      JSON.parse(localStorage.getItem("SelectedProducts"));

    // Selected Currency
    const currencyIndex = localStorage.getItem("currency");
    const { isopen } = this.props;

    // Selected Currency symbol
    const symbol =
      currencies[currencyIndex] && currencies[currencyIndex].symbol;

    // Only Return an array of the selected Products prices
    const productPrices =
      selectedProducts &&
      selectedProducts.map((product) => {
        return product.productPrice;
      });
    // Sum of all prices
    const totalPrice =
      productPrices &&
      productPrices.reduce((prev, curr) => {
        return prev + curr;
      }, 0);

    // A single product Amount
    const amount =
      selectedProducts &&
      selectedProducts.map((product) => {
        return product.productAmount;
      });

    // All cart products amount
    const cartItemsAmount =
      amount &&
      amount.reduce((prev, curr) => {
        return prev + curr;
      }, 0);

    // Save sum in local storage
    localStorage.setItem("totalPrice", totalPrice);
    return (
      <Overlay isopen={isopen}>
        <Cart>
          {
            // if user selectes products
            selectedProducts && selectedProducts.length ? (
              <p>
                My Bag, {cartItemsAmount}
                <span className="items"> items</span>
              </p>
            ) : (
              <p className="emptyCartText">Cart is empty!</p>
            )
          }
          <div>
            {
              // If user added products to cart
              selectedProducts &&
                selectedProducts.map(
                  (selectedProduct, index, selectedProducts) => {
                    return (
                      <SelectedProduct
                        key={index}
                        selectedProduct={selectedProduct}
                        selectedProducts={selectedProducts}
                      />
                    );
                  }
                )
            }
          </div>
          {
            // Check if SelectedArray isn't empty and product has attributes
            selectedProducts && selectedProducts.length ? (
              <div className="totalPrice">
                <span className="total">Total: </span>
                <span>{`${symbol || "$"}${totalPrice * cartItemsAmount}`}</span>
              </div>
            ) : null
          }
          {
            // Check if SelectedArray isn't empty and product has attributes
            selectedProducts && selectedProducts.length ? (
              <div className="buttons">
                <button onClick={() => !isopen && <CartPage />}>
                  <span>View Bag</span>
                </button>
                <button>
                  <span>Check out</span>
                </button>
              </div>
            ) : null
          }
        </Cart>
      </Overlay>
    );
  }
}
