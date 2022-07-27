import React, { Component } from "react";
// Styles
import { Swatch, Text } from "./ProductAttributes.styles";
import Context from "../../context/context";

export default class ProductAttributes extends Component {
  static contextType = Context;
  render() {
    const { setSelectedProducts, selectedProducts } = this.context;
    const { product, item, type, attributeName, selectedProduct, cartPage } =
      this.props;

    const productAttribute = selectedProducts.find(
      (selectedProduct) => selectedProduct.id === product.id
    );

    const setSelectedAttributes = (item) => {
      // FIRST: Count the occurences of an object
      const count =
        selectedProducts &&
        selectedProducts.reduce(
          (initialValue, currentProduct) =>
            currentProduct.id === product.id ? ++initialValue : initialValue,
          0
        );
      //console.log(!productAttribute.id === product.id, !count);
      // SECOND: Check if an object exists
      if (!count) {
        // Insert Object with the selected attribute and it's corresponding name
        productAttribute.attributes.push({
          [attributeName]: item.displayValue,
          id: product.id,
        });
      } else {
        // Change the current object attributes if the object exists
        productAttribute.attributes.forEach((productAtt) => {
          if (productAtt.id === product.id) {
            productAtt[attributeName] = item.displayValue;
          }
        });
      }
      setSelectedProducts(selectedProducts);
    };
    const attribute =
      productAttribute.attributes &&
      productAttribute.attributes
        .map((item1) => {
          if (productAttribute) {
            return (
              item.displayValue === item1[attributeName] &&
              product.id === item1.id
            );
          } else {
            return null;
          }
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
