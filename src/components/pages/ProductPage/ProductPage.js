import React, { Component } from "react";
import { Interweave } from "interweave";
import API from "../../../api";
// Query
import { productQuery } from "../../../Queries";
// Styles
import { Gallery, Wrapper, Img, Content } from "./ProductPage.styles";
// Components
import CurrencySwitcher from "../../CurrencySwitcher/CurrencySwitcher";
import ProductAttributes from "../../ProductAttributes/ProductAttributes";

export default class ProductPage extends Component {
  state = {
    increaseAmountOfProduct: localStorage.getItem("amount"),
    product: {
      SelectedAttributes:
        JSON.parse(localStorage.getItem("SelectedAttributes")) || [],
    },
  };

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
    const setWantToBuyProducts = (theproduct) => {
      const products = JSON.parse(localStorage.getItem("SelectedProducts"))
        ? JSON.parse(localStorage.getItem("SelectedProducts"))
        : [];
      const count = products.reduce(
        (initialValue, currentProduct) =>
          currentProduct.id === theproduct.id ? ++initialValue : initialValue,
        0
      );

      if (!count) {
        products.push({
          name: product.name,
          brand: product.brand,
          id: product.id,
          gallery: product.gallery[0],
          selectedAttributes: this.state.product.selectedAttributes,
          count: count,
        });
      }
      setSelectedProducts(products);
    };

    const setAmount = () => {
      this.setState((prevState) => ({
        increaseAmountOfProduct: localStorage.setItem(
          "amount",
          Number(++prevState)
        ),
      }));
    };

    console.log(product.id);
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
          <Content>
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
            <p>Price: </p>
            <CurrencySwitcher product={product} />
            <button
              onClick={() => {
                setAmount();
                setWantToBuyProducts(product);
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
