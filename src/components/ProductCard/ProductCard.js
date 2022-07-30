import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/context";
// Styles
import { Wrapper, Content, Image } from "./ProductCard.styles";
// Component
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";
// Logo
import InCartLogoIcon from "./../../assets/InCartLogo.svg";
import { addProductsToCart, countProduct } from "../../addProductsToCart";

export default class ProductCard extends Component {
  static contextType = Context;
  state = this.context;
  Ref = React.createRef();

  render() {
    const { product } = this.props;
    const { currencies, setAttributes, selectedProducts } = this.context;
    const { setSelectedProducts } = this.state;
    const setProudctId = () => {
      localStorage.setItem("id", product.id);
      this.state.setProductId(product.id);
    };

    const handleAlreadyInCartAlert = () => {
      if (countProduct(product, selectedProducts)) {
        this.Ref.current.innerText = "Item already in cart";
        this.Ref.current.style.backgroundColor = "rgb(0, 0, 0, 0.2)";
      } else {
        this.Ref.current.innerText = null;
        this.Ref.current.style.backgroundColor = null;
      }
    };

    const addAttributes = (product, setAttributes) => {
      const productAttributes = JSON.parse(localStorage.getItem("attributes"))
        ? JSON.parse(localStorage.getItem("attributes"))
        : [];
      // add initial attributes on selection
      const attributes = product.attributes.map((attribute) => {
        return {
          [attribute.name]: attribute.items[0].displayValue,
          id: product.id,
        };
      });
      const count = productAttributes.reduce(
        (initialValue, currentProduct) =>
          currentProduct.id === product.id ? ++initialValue : initialValue,
        0
      );
      if (!count) {
        productAttributes.push(...attributes);
        setAttributes(productAttributes);
        addProductsToCart(
          product,
          setSelectedProducts,
          currencies,
          selectedProducts
        );
      }
    };

    return (
      <Wrapper icon={InCartLogoIcon}>
        <Link to={`/${product.id}`} onClick={() => setProudctId()}>
          {!product.inStock && <p className="outofstock">OUT OF STOCK</p>}
          <Image src={product.gallery[0]} inStock={product.inStock} />
        </Link>{" "}
        <div ref={this.Ref} className="InCart"></div>
        <Content>
          <a
            href=" "
            onClick={(e) => {
              e.preventDefault();
              addAttributes(product, setAttributes);
            }}
          >
            <img
              src={InCartLogoIcon}
              className="inCartIcon"
              onClick={() => handleAlreadyInCartAlert()}
            />
          </a>
          <h1>{product.brand}</h1>
          <h2> {product.name}</h2>
          <div className="price">
            <CurrencySwitcher product={product} />
          </div>
        </Content>
      </Wrapper>
    );
  }
}
