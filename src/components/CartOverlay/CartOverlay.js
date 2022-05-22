import React, { Component } from "react";
import Context from "../../context/context";
// Style
import { Cart, Overlay } from "./CartOverlay.styles";
// Component
import SelectedProduct from "../SelectedProduct/SelectedProduct";

export default class CartOverlay extends Component {
  static contextType = Context;
  render() {
    const { isOpen } = this.props;
    const selectedProducts =
      JSON.parse(localStorage.getItem("SelectedProducts")) &&
      JSON.parse(localStorage.getItem("SelectedProducts"));
    return (
      <Overlay isOpen={isOpen}>
        <Cart>
          <p>My Bag, 0 items</p>
          {selectedProducts &&
            selectedProducts.map((selectedProduct, index, selectedProducts) => {
              return (
                <SelectedProduct
                  key={index}
                  selectedProduct={selectedProduct}
                  selectedProducts={selectedProducts}
                />
              );
            })}
        </Cart>
      </Overlay>
    );
  }
}
