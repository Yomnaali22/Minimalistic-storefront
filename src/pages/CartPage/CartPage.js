import React, { Component } from "react";
import Context from "../../context/context";
// Styles
import { Wrapper, Content, Text, Headline, Button } from "./CartPage.styles";
// Component
import SelectedProduct from "../../components/SelectedProduct/SelectedProduct";
export default class CartPage extends Component {
  static contextType = Context;
  render() {
    const { currencies, categories } = this.context;
    // Selected currency index
    const currencyIndex = localStorage.getItem("currency");

    // Selected Currency symbol
    const symbol =
      currencies[currencyIndex] && currencies[currencyIndex].symbol;

    // All selected Products
    const selectedProducts = JSON.parse(
      localStorage.getItem("SelectedProducts")
    );

    // All products amounts
    const productsAmounts =
      selectedProducts &&
      selectedProducts.map((product) => {
        return { amount: product.productAmount, id: product.id };
      });

    // All Selected products ids
    const selectedProductsId =
      selectedProducts && selectedProducts.map((product) => product.id);

    // All products ids
    const allProductsIds =
      categories &&
      categories.products.map((product) => {
        return { prices: product.prices, id: product.id };
      });

    // All products Quantity
    const productsQuantity =
      productsAmounts &&
      productsAmounts
        .map((product) => {
          return product.amount;
        })
        .reduce((prev, curr) => prev + curr, 0);

    // Find product the product that exist in the selected products
    const findproduct =
      allProductsIds &&
      allProductsIds.filter((product) => {
        return selectedProductsId.includes(product.id);
      });

    // Proudct prices
    const productPrice =
      findproduct &&
      findproduct.map((product) => {
        return {
          prices: product.prices,
          id: product.id,
        };
      });

    // All prices
    const prices =
      productPrice &&
      productPrice.map((theproduct) => {
        return {
          amount: theproduct.prices.find((product) => {
            return (
              currencyIndex &&
              product.currency.label === currencies[currencyIndex].label &&
              product.amount
            );
          }),
          id: theproduct.id,
        };
      });

    const productsprices =
      prices &&
      prices.map((price) => {
        return { price: price.amount, id: price.id };
      });

    const final =
      productsAmounts &&
      productsAmounts.map((theproduct) => {
        return (
          productsprices &&
          productsprices.map((product) => {
            if (theproduct.id === product.id) {
              return theproduct.amount * product.price.amount;
            }
          })
        );
      });

    const final2 =
      final &&
      final.map((price) => {
        return (
          price &&
          price.find((p) => {
            return p !== undefined;
          })
        );
      });

    const totalPrice = final2.reduce((prev, curr) => prev + curr, 0);

    //console.log("products amounts", productsAmounts);
    //console.log("productsPrices", productsprices);
    //console.log("final", final, "final2", final2);

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
              <Text>
                Tax 21%:
                {` ${symbol || "$"}${Math.round(totalPrice / 21)}`}
              </Text>
              <Text>Quantity: {productsQuantity}</Text>
              <Text>Total: {`${symbol || "$"}${totalPrice}`}</Text>
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

//TODO: product price should only be multiplied if it's quantity increase
