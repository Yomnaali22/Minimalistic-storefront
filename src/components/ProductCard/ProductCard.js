import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/context";
// Styles
import { Wrapper, Content, Image, InCartLogo } from "./ProductCard.styles";
// Component
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";
// Logo
import InCartLogoIcon from "./../../assets/InCartLogo.svg";

export default class ProductCard extends Component {
  static contextType = Context;
  state = this.context;
  render() {
    const { product } = this.props;

    // Set and save product id
    const setProudctId = () => {
      localStorage.setItem("id", product.id);
      this.state.setProductId(product.id);
    };

    // Want to buy products
    const selectedProducts = JSON.parse(
      localStorage.getItem("SelectedProducts")
    );

    // Check if product in cart
    const inCart =
      selectedProducts &&
      selectedProducts.some(
        (selectedProduct) => selectedProduct.id === product.id
      );

    return (
      <Wrapper>
        {
          // Check if product in stock
          product.inStock || !product.inStock ? (
            <Link to={`/${product.id}`} onClick={() => setProudctId()}>
              {!product.inStock && <p className="outofstock">OUT OF STOCK</p>}
              <Image src={product.gallery[0]} inStock={product.inStock} />
            </Link>
          ) : null
        }
        <Content>
          {inCart && <InCartLogo src={InCartLogoIcon} />}
          <h1>{product.name}</h1>
          <div className="price">
            <CurrencySwitcher product={product} />
          </div>
        </Content>
      </Wrapper>
    );
  }
}
