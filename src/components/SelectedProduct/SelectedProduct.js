import React, { Component } from "react";
import Context from "./../../context/context";
// Styles
import { Wrapper, ProductWrapper, Text } from "./SelectedProduct.styles";
// Components
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";
import ProductAttributes from "../ProductAttributes/ProductAttributes";
import ImageSlider from "../ImageSlider/ImageSlider";

export default class SelectedProduct extends Component {
  static contextType = Context;
  render() {
    const { categories, setSelectedProducts } = this.context;
    const { selectedProduct, selectedProducts, className } = this.props;
    const product =
      categories &&
      categories.products.find(
        (theProduct) => theProduct.id === selectedProduct.id
      );

    // Find product quantity with the matching id
    const productQuantity =
      selectedProducts &&
      selectedProducts.find((pro) => {
        return pro.id === selectedProduct.id;
      }).productAmount;

    // Increase the amount of product with the matching id
    const increasProductAmount = () => {
      const productAmount =
        selectedProducts &&
        selectedProducts.map((product) => {
          if (product.id === selectedProduct.id)
            product.productAmount = productQuantity + 1;
          return product;
        });
      // Update state of the selected products
      setSelectedProducts(productAmount);
    };

    // Decrease the amount of product with the matching id
    const decreaseProductAmount = () => {
      const productAmount =
        selectedProducts &&
        selectedProducts.map((product) => {
          if (product.id === selectedProduct.id)
            product.productAmount = productQuantity - 1;
          return product;
        });
      // Update state of the selected products
      setSelectedProducts(productAmount);

      const filteredArr = selectedProducts.filter((product) => {
        return product.productAmount !== 0;
      });
      setSelectedProducts(filteredArr);
    };
    return (
      selectedProducts.length !== 0 && (
        <Wrapper>
          <ProductWrapper className={className}>
            {className === "cartPage" ? (
              <ImageSlider
                images={selectedProduct.gallery}
                className="slider"
              />
            ) : (
              <img
                src={selectedProduct.gallery[0]}
                alt={selectedProducts.name}
              />
            )}
            <div className="button">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  increasProductAmount();
                }}
              >
                +
              </button>
              <span className="productAmount">{productQuantity}</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  decreaseProductAmount();
                }}
              >
                -
              </button>
            </div>
            <Text className={className}>
              <span className="brand">{selectedProduct.brand}</span>
              <span className="name">{selectedProduct.name}</span>
              <span className="price">
                <CurrencySwitcher product={product} />
              </span>
              <div className="attributes">
                {product &&
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
                              cartPage={className}
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
