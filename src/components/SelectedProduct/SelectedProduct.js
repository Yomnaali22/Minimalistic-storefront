import React, { Component } from "react";
import Context from "./../../context/context";
// Styles
import {
  Wrapper,
  ProductWrapper,
  Text,
  Content,
} from "./SelectedProduct.styles";
// Components
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";
import ProductAttributes from "../ProductAttributes/ProductAttributes";
import SimpleImageSlider from "react-simple-image-slider";
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
              <ImageSlider images={selectedProduct.gallery} />
            ) : (
              <img src={selectedProduct.gallery[0]} />
            )}
            <div className="button">
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  increasProductAmount();
                }}
              >
                +
              </a>
              <span className="amount">{productQuantity}</span>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  decreaseProductAmount();
                }}
              >
                -
              </a>
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
