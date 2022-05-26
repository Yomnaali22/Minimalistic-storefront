import React, { Component } from "react";
import Context from "../../context/context";
// Styles
import { Wrapper, ProductWrapper, Text } from "./SelectedProduct.styles";
// Components
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";
import ProductAttributes from "../ProductAttributes/ProductAttributes";
//TODO: Increase amount of each product

export default class SelectedProduct extends Component {
  static contextType = Context;
  render() {
    const { categories, setSelectedProducts } = this.context;
    const { selectedProduct, selectedProducts } = this.props;
    const product = categories.products.find(
      (theProduct) => theProduct.id === selectedProduct.id
    );
    // Find Each product amount
    const amount = selectedProducts.find((pro) => {
      return pro.id === selectedProduct.id;
    });
    // Increase the amount of produc that matches product id
    const increasProductAmount = () => {
      const productAmount = selectedProducts.map((pro) => {
        if (pro.id === selectedProduct.id)
          pro.productAmount = pro.productAmount + 1;
        return pro;
      });
      // Update state of the selected products
      setSelectedProducts(productAmount);
    };

    // Decrease the amount of produc that matches product id
    const decreaseProductAmount = () => {
      const productAmount = selectedProducts.map((pro) => {
        if (pro.id === selectedProduct.id)
          pro.productAmount = pro.productAmount - 1;
        return pro;
      });
      // Update state of the selected products
      setSelectedProducts(productAmount);

      const filteredArr = selectedProducts.filter((pro) => {
        return pro.productAmount !== 0;
      });
      setSelectedProducts(filteredArr);
    };

    return (
      selectedProducts.length !== 0 && (
        <Wrapper>
          <ProductWrapper>
            <img src={selectedProduct.gallery} />
            <div className="button">
              <button
                onClick={() => {
                  increasProductAmount();
                }}
              >
                <span>+</span>
              </button>
              {amount.productAmount}
              <button
                onClick={() => {
                  decreaseProductAmount();
                }}
              >
                <span>-</span>
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
                      <React.Fragment key={index}>
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
