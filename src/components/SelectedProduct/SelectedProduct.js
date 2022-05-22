import React, { Component } from "react";
import {
  Wrapper,
  ProductWrapper,
  Content,
  Button,
  Text,
} from "./SelectedProduct.styles";
import Context from "../../context/context";
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";
import ProductAttributes from "../ProductAttributes/ProductAttributes";

export default class SelectedProduct extends Component {
  static contextType = Context;
  render() {
    const { categories } = this.context;
    const { selectedProduct, selectedProducts } = this.props;
    const product = categories.products.find(
      (theProduct) => theProduct.id === selectedProduct.id
    );
    return (
      <Wrapper>
        <ProductWrapper>
          <img src={selectedProduct.gallery} />
          <Button>
            <button>+</button>
            <button>-</button>
          </Button>
          <Text>
            <span>{selectedProduct.brand}</span>
            <span>{selectedProduct.name}</span>
          </Text>
          {product.attributes &&
            product.attributes.map((attribute, index, attributes) => {
              return (
                <React.Fragment key={attribute.id}>
                  <span>{attribute.name}: </span>
                  {attributes[index].items.map((item) => {
                    return (
                      <ProductAttributes
                        key={item.id}
                        attributeName={attribute.name}
                        type={attribute.type}
                        item={item}
                        product={product}
                      />
                    );
                  })}
                </React.Fragment>
              );
            })}
        </ProductWrapper>
        <CurrencySwitcher product={product} />
      </Wrapper>
    );
  }
}
