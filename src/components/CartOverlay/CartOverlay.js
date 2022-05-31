import React, { Component } from "react";
import Context from "../../context/context";
// Style
import { Cart, Overlay } from "./CartOverlay.styles";
// Component
import SelectedProduct from "../SelectedProduct/SelectedProduct";
import { Link } from "react-router-dom";

export default class CartOverlay extends Component {
  static contextType = Context;
  render() {
    const { currencies, setOverlay } = this.context;
    const { isopen } = this.props;

    // All selected Products
    const selectedProducts =
      JSON.parse(localStorage.getItem("SelectedProducts")) &&
      JSON.parse(localStorage.getItem("SelectedProducts"));

    // Selected Currency
    const currencyIndex = localStorage.getItem("currency");

    // Selected Currency symbol
    const symbol =
      currencies[currencyIndex] && currencies[currencyIndex].symbol;

    // the quantity of of each item in cart
    const amounts =
      selectedProducts &&
      selectedProducts.map((product) => {
        {
          return { amount: product.productAmount, id: product.id };
        }
      });

    // all products quantity
    const productsQuantity =
      amounts &&
      amounts.reduce((total, curr) => {
        return total + curr.amount;
      }, 0);

    // Total price of the products
    const totalPrice = selectedProducts
      .map((theproduct) => {
        return amounts.map((product) => {
          if (product.id === theproduct.id) {
            return theproduct.productPrice * product.amount;
          }
        });
      })
      .reduce(function (a, b) {
        return a.concat(b);
      }, [])
      .filter((product) => product !== undefined)
      .reduce((prev, curr) => prev + curr, 0);

    return (
      <Overlay isopen={isopen}>
        <Cart>
          {
            // if user selectes products
            selectedProducts && selectedProducts.length ? (
              <p>
                My Bag, {productsQuantity}
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
                <span>{`${symbol || "$"}${totalPrice}`}</span>
              </div>
            ) : null
          }
          {
            // Check if SelectedArray isn't empty and product has attributes
            selectedProducts && selectedProducts.length ? (
              <div className="buttons">
                <Link to="/cart" onClick={() => setOverlay(false)}>
                  <button>
                    <span>View Bag</span>
                  </button>
                </Link>
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
