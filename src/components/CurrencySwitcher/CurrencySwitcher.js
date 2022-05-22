import React, { Component } from "react";
import Context from "../../context/context";
import { Content } from "./CurrencySwitcher.styles";

export default class CurrencySwitcher extends Component {
  static contextType = Context;
  render() {
    const { currencies } = this.context;
    const { product } = this.props;
    const prices = product.prices;
    // Selected Currency index
    const index = JSON.parse(localStorage.getItem("currency"));
    // Product amount and symbol that matchs the chosen index
    const productPrice =
      prices &&
      currencies.length &&
      prices.find(
        (price) => index && price.currency.label === currencies[index].label
      );

    return productPrice ? (
      <Content>
        {`${productPrice.currency.symbol}
        ${productPrice.amount}`}
      </Content>
    ) : (
      <Content>
        {
          // Default price and symbol is set to $
          prices && `${prices[0].currency.symbol}${prices[0].amount}`
        }
      </Content>
    );
  }
}
