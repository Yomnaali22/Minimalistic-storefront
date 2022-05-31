import React, { Component } from "react";
// Styles
import { Wrapper, Headline } from "./CartPage.styles";
// Components
import SelectedProduct from "../../components/SelectedProduct/SelectedProduct";
import TotalPrices from "../../components/TotalPrices/TotalPrices";
export default class CartPage extends Component {
  render() {
    // All selected Products
    const selectedProducts = JSON.parse(
      localStorage.getItem("SelectedProducts")
    );

    return (
      <Wrapper>
        <Headline>Cart</Headline>
        {
          // If user added products to cart
          selectedProducts &&
            selectedProducts.map((selectedProduct, index, selectedProducts) => {
              return (
                <SelectedProduct
                  key={index}
                  selectedProduct={selectedProduct}
                  selectedProducts={selectedProducts}
                  className="cartPage"
                />
              );
            })
        }
        {<TotalPrices className="cartPage" />}
      </Wrapper>
    );
  }
}
