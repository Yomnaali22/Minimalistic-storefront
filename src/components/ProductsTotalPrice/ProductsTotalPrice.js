import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/context";
import { Content, Text, Button } from "../../pages/CartPage/CartPage.styles";
export default class ProductsTotalPrice extends Component {
  static contextType = Context;
  render() {
    const { currencies } = this.context;
    const { className } = this.props;
    // Selected Currency
    const currencyIndex = localStorage.getItem("currency");
    // Selected Currency symbol
    const symbol =
      currencies[currencyIndex] && currencies[currencyIndex].symbol;
    // All selected Products
    const selectedProducts =
      JSON.parse(localStorage.getItem("SelectedProducts")) &&
      JSON.parse(localStorage.getItem("SelectedProducts"));
    //the quantity of of each item in cart
    const amounts =
      selectedProducts &&
      selectedProducts.map((product) => {
        {
          return { amount: product.productAmount, id: product.id };
        }
      });
    // first: get all products quantity
    const productsQuantity =
      amounts &&
      amounts.reduce((total, curr) => {
        return total + curr.amount;
      }, 0);
    // second: Total price of the products
    const totalPrice =
      selectedProducts &&
      selectedProducts
        .map((theproduct) => {
          return amounts.map((product) => {
            if (product.id === theproduct.id) {
              return theproduct.productPrice * product.amount;
            }
          });
        })
        .reduce((prev, curr) => prev.concat(curr), [])
        // remove undefined items
        .filter((product) => product)
        // sum of all prices
        .reduce((prev, curr) => prev + curr, 0);

    return className === "miniCart" ? (
      <>
        {
          // Check if SelectedArray isn't empty and product has attributes
          selectedProducts && selectedProducts.length ? (
            <div className="totalPrice">
              <span className="total">Total: </span>
              <span>{`${symbol || "$"}${Math.round(totalPrice)}`}</span>
            </div>
          ) : null
        }
      </>
    ) : (
      // Check if user selected products
      selectedProducts && selectedProducts.length !== 0 && (
        <Content>
          <Text>
            Tax 21%:
            {` ${symbol || "$"}${Math.round(totalPrice / 21)}`}
          </Text>
          <Text>Quantity: {productsQuantity}</Text>
          <Text>Total: {`${symbol || "$"}${Math.round(totalPrice)}`}</Text>
          <Link to="/">
            <Button
              onClick={() => {
                localStorage.removeItem("SelectedProducts");
                localStorage.removeItem("SelectedAttributes");
              }}
            >
              <span>Order</span>
            </Button>
          </Link>
        </Content>
      )
    );
  }
}
