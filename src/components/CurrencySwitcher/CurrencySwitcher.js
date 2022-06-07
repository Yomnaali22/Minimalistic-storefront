import React, { Component } from "react";
import Context from "../../context/context";
// Styles
import { Content } from "./CurrencySwitcher.styles";

export default class CurrencySwitcher extends Component {
  static contextType = Context;
  render() {
    const { currencies } = this.context;
    const { product } = this.props;
    // Product prices
    const prices = product && product.prices;

    const selectedCurrencyIndex = JSON.parse(localStorage.getItem("currency"));

    // Want to buy products
    const selectedProducts = JSON.parse(
      localStorage.getItem("SelectedProducts")
    );

    // Find and return the amount and symbol that matchs the chosen currency
    const productPrice =
      prices &&
      currencies.length &&
      prices.find(
        (price) =>
          selectedCurrencyIndex &&
          currencies[selectedCurrencyIndex].label === price.currency.label
      );

    // Update the want to buy product with new selected currency
    selectedProducts &&
      selectedProducts.forEach((theproduct) => {
        if (
          theproduct.id === (product && product.id) &&
          selectedCurrencyIndex &&
          productPrice
        ) {
          theproduct.productPrice = productPrice.amount;
        } else if (theproduct.id === (product && product.id) && !productPrice) {
          theproduct.productPrice = prices[0].amount;
        }
      });

    localStorage.setItem("SelectedProducts", JSON.stringify(selectedProducts));
    return productPrice ? (
      <Content>
        {
          // The chosen currency
          `${productPrice.currency.symbol}${Math.round(productPrice.amount)}`
        }
      </Content>
    ) : (
      <Content>
        {
          // Default currency is set to $ if user didn't select a currency "currencyIndex"
          prices &&
            `${prices[0].currency.symbol}${Math.round(prices[0].amount)}`
        }
      </Content>
    );
  }
}
