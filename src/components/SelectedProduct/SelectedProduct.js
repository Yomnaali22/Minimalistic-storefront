import React, { Component } from "react";
import Context from "../../context/context";
// Styles
import { Wrapper, ProductWrapper, Text } from "./SelectedProduct.styles";
// Components
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
      selectedProducts.length !== 0 && (
        <Wrapper>
          <ProductWrapper>
            <img src={selectedProduct.gallery} />
            <div className="button">
              <button>
                <text>+</text>
              </button>
              1
              <button>
                <text>-</text>
              </button>
            </div>
            <Text>
              <span className="brand">{selectedProduct.brand}</span>
              <span className="name">{selectedProduct.name}</span>
              <span className="price">
                <CurrencySwitcher product={product} />
              </span>
              <div className="attributes">
                {product.attributes &&
                  product.attributes.map((attribute, index, attributes) => {
                    return (
                      <React.Fragment key={attribute.id}>
                        <div className="attributeName">{attribute.name}:</div>
                        {attributes[index].items.map((item) => {
                          return (
                            <ProductAttributes
                              key={item.id}
                              attributeName={attribute.name}
                              type={attribute.type}
                              item={item}
                              product={product}
                              className="selectedProduct"
                            />
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
              </div>
            </Text>
          </ProductWrapper>
        </Wrapper>
      )
    );
  }
}
