import React, { Component } from "react";
import Context from "../../context/context";
// Style
import { Cart, Overlay } from "./CartOverlay.styles";
// Component
import SelectedProduct from "../SelectedProduct/SelectedProduct";

export default class CartOverlay extends Component {
  static contextType = Context;
  render() {
    const { isopen } = this.props;
    const selectedProducts =
      JSON.parse(localStorage.getItem("SelectedProducts")) &&
      JSON.parse(localStorage.getItem("SelectedProducts"));
    const selectedAttributes = JSON.parse(
      localStorage.getItem("SelectedAttributes")
    );

    const pr =
      selectedProducts &&
      selectedProducts.map((pro) => pro.productPrice.amount);
    const amount = pr.reduce((i, c) => i + c);

    return (
      <Overlay isopen={isopen}>
        <Cart>
          {(!selectedProducts && <p>Cart is empty!</p>) || (
            <p>My Bag, {selectedProducts.length} items</p>
          )}
          <div>
            {selectedProducts &&
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
              )}
          </div>
          {selectedProducts && selectedAttributes && (
            <div className="totalPrice">
              <text className="total">Total: </text>
              <text>{amount}</text>
            </div>
          )}
          {selectedProducts && selectedAttributes && (
            <div className="buttons">
              <button>
                <text>View Bag</text>
              </button>
              <button>
                <text>Check out</text>
              </button>
            </div>
          )}
        </Cart>
      </Overlay>
    );
  }
}
//TODO: styling the text "my bag 4 items text"
//TODO: Increase amount of each product
