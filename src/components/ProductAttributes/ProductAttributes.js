import React, { Component } from "react";
// Styles
import { Swatch, Text, CartPageSwatch } from "./ProductAttributes.styles";

export default class ProductAttributes extends Component {
  render() {
    const {
      product,
      item,
      setAttributes,
      type,
      attributeName,
      className,
      cartPage,
    } = this.props;

    // Selected attributes of all products
    const productsSelectedAttributes = JSON.parse(
      localStorage.getItem("SelectedAttributes")
    );
    // Selected attribute of a single product
    const productAttribute =
      productsSelectedAttributes &&
      productsSelectedAttributes.find(
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
    const selectedAttribute = productAttribute
      ? item.displayValue === productAttribute[attributeName] &&
        product.id === productAttribute.id
      : null;

    return (
      <Swatch
        color={{
          selectedAttribute: selectedAttribute,
          color: item.value,
          type: type,
          className: className,
          cartPage,
        }}
        onClick={() => setSelectedAttributes(item)}
      >
        {
          <Text
            color={{
              className: className,
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
