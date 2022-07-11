import React, { Component } from "react";
import { Interweave } from "interweave";
import API from "./../../api";
import Context from "./../../context/context";
import { addProductsToCart } from "../../helpers";
// Query
import { productQuery } from "./../../Queries";
// Styles
import { Gallery, Wrapper, Img, Content } from "./ProductPage.styles";
// Components
import CurrencySwitcher from "./../../components/CurrencySwitcher/CurrencySwitcher";
import ProductAttributes from "../../components/ProductAttributes/ProductAttributes";

export default class ProductPage extends Component {
  static contextType = Context;
  state = {
    increaseProductQuantity: localStorage.getItem("amount"),
  };
  // Get Product
  async componentDidMount() {
    try {
      const product = await API.getProduct(
        productQuery,
        localStorage.getItem("id")
      );
      this.props.setProduct(product);
    } catch (error) {
      console.log("error", error);
    }
  }

  render() {
    const { product, setSelectedProducts } = this.props;
    // All currencies
    const { currencies, setAttributes } = this.context;

    const prices = product.prices;

    const selectedCurrencyIndex = JSON.parse(localStorage.getItem("currency"));
    // Find and return the amount and symbol that matchs the chosen currency
    const productPrice =
      prices &&
      currencies.length &&
      prices.find(
        (price) =>
          selectedCurrencyIndex &&
          price.currency.label === currencies[selectedCurrencyIndex].label
      );

    const props = {
      setSelectedProducts,
      setAttributes,
      productPrice,
      product,
    };

    return (
      !product.length && (
        <Wrapper>
          <Gallery productId={product.id}>
            {
              // Gallery
              product.gallery &&
                product.gallery.map((photo) => {
                  return (
                    photo !== product.gallery[0] && (
                      <img src={photo} key={photo} />
                    )
                  );
                })
            }
          </Gallery>
          {product.gallery && (
            <Img src={product.gallery[0]} productId={product.id} />
          )}

          <Content productId={product.id}>
            <h1 className="brandName">{product.brand}</h1>
            <h3 className="productName">{product.name}</h3>
            {product.attributes &&
              product.attributes.map((attribute, index, attributes) => {
                return (
                  <React.Fragment key={attribute.id}>
                    <p className="attributeName">{attribute.name}:</p>
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
            <p className="attributeName">Price: </p>
            <CurrencySwitcher product={product} />
            <button
              onClick={(e) => {
                e.preventDefault();
                product.inStock && addProductsToCart(props);
              }}
            >
              Add To Cart
            </button>
            <Interweave
              content={product.description}
              tagName="div"
              className="description"
            />
          </Content>
        </Wrapper>
      )
    );
  }
}
