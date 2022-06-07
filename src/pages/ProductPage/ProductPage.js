import React, { Component } from "react";
import { Interweave } from "interweave";
import API from "./../../api";
import Context from "./../../context/context";
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
    selectedAttributes:
      [] || JSON.parse(localStorage.getItem("SelectedAttributes")),
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

  // Set product attributes in localStorage
  setAttributes(attributes) {
    this.setState({
      SelectedAttributes: localStorage.setItem(
        "SelectedAttributes",
        JSON.stringify(attributes)
      ),
    });
  }

  render() {
    const { product, setSelectedProducts } = this.props;
    // All currencies
    const { currencies } = this.context;
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

    // Add Products to cart
    const WantToBuyProducts = (product) => {
      // Want to buy products
      const selectedProducts = JSON.parse(
        localStorage.getItem("SelectedProducts")
      )
        ? JSON.parse(localStorage.getItem("SelectedProducts"))
        : [];
      // Count the occurance of each product
      const count = selectedProducts.reduce(
        (initialValue, currentProduct) =>
          currentProduct.id === product.id ? ++initialValue : initialValue,
        0
      );

      // Want to buy products attributes
      const selectedAttributes = JSON.parse(
        localStorage.getItem("SelectedAttributes")
      );
      // Chech if the selected product has attributes
      const productSelectedAttribute =
        selectedAttributes &&
        selectedAttributes.some((attribute) => attribute.id === product.id);

      // Only Add products with Selected attributes to cart
      if (
        (!count && productSelectedAttribute) ||
        product.attributes.length === 0
      ) {
        selectedProducts.push({
          name: product.name,
          brand: product.brand,
          id: product.id,
          gallery: product.gallery,
          selectedAttributes: selectedAttributes && selectedAttributes,
          productPrice:
            selectedCurrencyIndex === 0 || !selectedCurrencyIndex
              ? Math.round(product.prices[0].amount)
              : Math.round(productPrice),
          productAmount: 1,
        });
        setSelectedProducts(selectedProducts);
      }
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
                          setAttributes={this.setAttributes.bind(this)}
                        />
                      );
                    })}
                  </React.Fragment>
                );
              })}
            <p className="attributeName">Price: </p>
            <CurrencySwitcher product={product} />
            <button
              onClick={() => {
                // Put only available products in cart
                product.inStock && WantToBuyProducts(product);
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
