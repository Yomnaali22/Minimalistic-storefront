import React, { Component } from "react";
import Context from "../../context/context";
// Styles
import { Wrapper, Content, Text, Headline, Button } from "./CartPage.styles";
// Component
import SelectedProduct from "../../components/SelectedProduct/SelectedProduct";

export default class CartPage extends Component {
  static contextType = Context;
  render() {
    const { currencies } = this.context;
    // All selected Products
    const selectedProducts =
      JSON.parse(localStorage.getItem("SelectedProducts")) &&
      JSON.parse(localStorage.getItem("SelectedProducts"));

    console.log(selectedProducts);
    const currencyIndex = localStorage.getItem("currency");
    // Selected Currency symbol
    const symbol =
      currencies[currencyIndex] && currencies[currencyIndex].symbol;

    // Find Each product amount
    const amount =
      selectedProducts &&
      selectedProducts.length !== 0 &&
      selectedProducts.map((pro) => {
        return pro.productAmount;
      });

    // caculate amount
    const productsQuantity =
      amount &&
      amount.reduce((prev, curr) => {
        return prev + curr;
      });

    const totalPrice = Math.round(localStorage.getItem("totalPrice"));

    const tax = Math.round(totalPrice / 21);
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
        {
          // Check if user selected products
          selectedProducts && selectedProducts.length !== 0 && (
            <Content>
              <Text>Tax 21%: {tax}</Text>
              <Text>Quantity: {productsQuantity}</Text>
              <Text>Total: {`${symbol}${totalPrice}`}</Text>
              <Button>
                <span>Order</span>
              </Button>
            </Content>
          )
        }
      </Wrapper>
    );
  }
}
