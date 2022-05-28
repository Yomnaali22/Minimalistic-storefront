import React, { Component } from "react";
import Context from "../../context/context";
// Styles
import { Content } from "./CurrencySwitcher.styles";

export default class CurrencySwitcher extends Component {
  static contextType = Context;
  render() {
    // All currencies
    const { currencies } = this.context;
    const { product } = this.props;
    // Product prices
    const prices = product && product.prices;
    // Selected Currency index
    const index = JSON.parse(localStorage.getItem("currency"));
    // Find and return the amount and symbol that matchs the chosen currency
    const productPrice =
      prices &&
      currencies.length &&
      prices.find(
        (price) => index && price.currency.label === currencies[index].label
      );
    const selectedProducts = JSON.parse(
      localStorage.getItem("SelectedProducts")
    );
    JSON.parse(localStorage.getItem("SelectedProducts")) &&
      selectedProducts.forEach((theproduct) => {
        if (theproduct.id === (product && product.id) && index == false) {
          theproduct.productPrice = prices[0].amount;
        } else if (theproduct.id === (product && product.id) && index) {
          theproduct.productPrice = productPrice.amount;
        }
      });
    localStorage.setItem("SelectedProducts", JSON.stringify(selectedProducts));

    return productPrice ? (
      <Content>
        {
          // The chosen currency
          `${productPrice.currency.symbol}${productPrice.amount}`
        }
      </Content>
    ) : (
      <Content>
        {
          // Default currency is set to $ if user didn't select a currency
          prices && `${prices[0].currency.symbol}${prices[0].amount}`
        }
      </Content>
    );
  }
}
