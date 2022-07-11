import React, { Component } from "react";
// Styles
import { Swatch, Text } from "./ProductAttributes.styles";
import Context from "../../context/context";

export default class ProductAttributes extends Component {
  static contextType = Context;
  render() {
    const { setAttributes } = this.context;
    const { product, item, type, attributeName, selectedProduct, cartPage } =
      this.props;
    // Selected attributes of all products
    const selectedProductsAttributes = JSON.parse(
      localStorage.getItem("SelectedAttributes")
    );

    // Selected attribute of a single product
    const productAttribute =
      selectedProductsAttributes &&
      selectedProductsAttributes.filter(
        (attribute) => attribute.id === product.id
      );

    const setSelectedAttributes = (item) => {
      // Initialize an empty array if no Object exist
      const productsSelectedAttributes = JSON.parse(
        localStorage.getItem("SelectedAttributes")
      )
        ? JSON.parse(localStorage.getItem("SelectedAttributes"))
        : [];
      // FIRST: Count the occurences of an object
      const count = productsSelectedAttributes.reduce(
        (initialValue, currentProduct) =>
          currentProduct.id === product.id ? ++initialValue : initialValue,
        0
      );
      // SECOND: Check if an object exists
      if (!count) {
        // Insert Object with the selected attribute and it's corresponding name
        productsSelectedAttributes.push({
          [attributeName]: item.displayValue,
          id: product.id,
        });
      } else {
        // Change the current object attributes if the object exists
        productsSelectedAttributes.forEach((productAttribute) => {
          if (productAttribute.id === product.id) {
            return (productAttribute[attributeName] = item.displayValue);
          }
        });
      }
      setAttributes(productsSelectedAttributes);
    };

    const attribute =
      productAttribute &&
      productAttribute
        .map((item1) => {
          return productAttribute
            ? item.displayValue === item1[attributeName] &&
                product.id === item1.id
            : null;
        })
        .some((element) => element && element);

    return (
      <Swatch
        color={{
          selectedAttribute: attribute,
          color: item.value,
          type: type,
          selectedProduct,
          cartPage,
        }}
        onClick={() => setSelectedAttributes(item)}
      >
        {
          <Text
            color={{
              selectedProduct,
              cartPage,
            }}
          >
            {type === "text" && item.value}
          </Text>
        }
      </Swatch>
    );
  }
}
