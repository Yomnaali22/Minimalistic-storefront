import React, { Component } from "react";
// Styles
import { Wrapper, Headline } from "./CartPage.styles";
// Components
import SelectedProduct from "../../components/SelectedProduct/SelectedProduct";
import ProductsTotalPrice from "../../components/ProductsTotalPrice/ProductsTotalPrice";
export default class CartPage extends Component {
  render() {
    // All selected Products
    const selectedProducts = JSON.parse(
      localStorage.getItem("SelectedProducts")
    );
    return (
      <Wrapper>
        <Headline>Cart</Headline>
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
                      className="cartPage"
                    />
                  );
                }
              )
          }
        </div>
        <ProductsTotalPrice className="cartPage" />
      </Wrapper>
    );
  }
}
