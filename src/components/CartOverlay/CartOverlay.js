import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/context";
// Style
import { Cart, Overlay } from "./CartOverlay.styles";
// Components
import SelectedProduct from "../SelectedProduct/SelectedProduct";
import TotalPrices from "../TotalPrices/TotalPrices";
export default class CartOverlay extends Component {
  static contextType = Context;
  render() {
    const { setOverlay } = this.context;
    const { isopen } = this.props;
    // All selected Products
    const selectedProducts =
      JSON.parse(localStorage.getItem("SelectedProducts")) &&
      JSON.parse(localStorage.getItem("SelectedProducts"));

    // first: get all products quantity
    const productsQuantity =
      selectedProducts &&
      selectedProducts.reduce((total, curr) => {
        return total + curr.productAmount;
      }, 0);

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
          {<TotalPrices className="miniCart" />}
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
