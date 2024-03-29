import React, { Component } from "react";
// Styles
import { Wrapper, Headline } from "./CartPage.styles";
// Components
import SelectedProduct from "../../components/SelectedProduct/SelectedProduct";
import ProductsTotalPrice from "../../components/ProductsTotalPrice/ProductsTotalPrice";

export default class CartPage extends Component {
  render() {
    // Want to buy products
    const selectedProducts = JSON.parse(
      localStorage.getItem("SelectedProducts")
    );
    return (
      <Wrapper>
        <Headline>Cart</Headline>
        {selectedProducts &&
          selectedProducts.map((selectedProduct, index, selectedProducts) => {
            return (
              <SelectedProduct
                key={index}
                selectedProduct={selectedProduct}
                selectedProducts={selectedProducts}
                name="cartPage"
              />
            );
          })}
        <ProductsTotalPrice className="cartPage" />
      </Wrapper>
    );
  }
}
