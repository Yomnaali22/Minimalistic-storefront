import React, { Component } from "react";
import { Interweave } from "interweave";
import API from "../../../api";
import Context from "../../../context/context";
// Query
import { productQuery } from "../../../Queries";
// Styles
import { Gallery, Wrapper, Img, Content } from "./ProductPage.styles";
// Components
import CurrencySwitcher from "../../CurrencySwitcher/CurrencySwitcher";
import ProductAttributes from "../../ProductAttributes/ProductAttributes";

export default class ProductPage extends Component {
  static contextType = Context;
  state = {
    increaseAmountOfProduct: localStorage.getItem("amount"),
    product: {
      SelectedAttributes:
        [] || JSON.parse(localStorage.getItem("SelectedAttributes")),
    },
  };

  // Get the product data
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

  // Set the attributes of the product
  setAttributes(productsColors) {
    this.setState({
      product: {
        SelectedAttributes: localStorage.setItem(
          "SelectedAttributes",
          JSON.stringify(productsColors)
        ),
      },
    });
  }

  render() {
    const { product, setSelectedProducts } = this.props;
    // All currencies
    const { currencies } = this.context;
    // Product prices
    const prices = product.prices;
    // Selected Currency index
    const index = JSON.parse(localStorage.getItem("currency"));

    // Find and return the amount and symbol that matchs the chosen currency
    const productPrice =
      prices &&
      currencies.length &&
      prices.find(
        (price) => index && price.currency.label === currencies[index].label
      );

    /**
     * Add products to cart
     */
    const WantToBuyProducts = (product) => {
      // Want to buy products
      const selectedProducts = JSON.parse(
        localStorage.getItem("SelectedProducts")
      )
        ? JSON.parse(localStorage.getItem("SelectedProducts"))
        : [];
      // Count the occurance of an Object
      const count = selectedProducts.reduce(
        (initialValue, currentProduct) =>
          currentProduct.id === product.id ? ++initialValue : initialValue,
        0
      );
      // All Selected Attributes of selected Products
      const selectedAttributes = JSON.parse(
        localStorage.getItem("SelectedAttributes")
      );
      // Check if the product we're adding the cart has attributes set
      const productSelectedAttribute =
        selectedAttributes &&
        selectedAttributes.some((pro) => pro.id === product.id);

      // Don't add product to cart unless the product doesn't exist and has chosen attributes
      if (!count && productSelectedAttribute) {
        selectedProducts.push({
          name: product.name,
          brand: product.brand,
          id: product.id,
          gallery: product.gallery[0],
          selectedAttributes: selectedAttributes && selectedAttributes,
          productPrice:
            index === 0 || index === null
              ? product.prices[0].amount
              : productPrice,
          productAmount: 1,
        });
        setSelectedProducts(selectedProducts);
        // If the product has no attributes
      } else if (!count && product.attributes.length === 0) {
        selectedProducts.push({
          name: product.name,
          brand: product.brand,
          id: product.id,
          gallery: product.gallery[0],
          productPrice:
            index === 0 || index === null
              ? product.prices[0].amount
              : productPrice,
          productAmount: 1,
        });
        setSelectedProducts(selectedProducts);
      }
    };
    return (
      !product.length && (
        <Wrapper>
          {product.gallery && (
            <Img src={product.gallery[0]} productId={product.id} />
          )}
          <Gallery>
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
