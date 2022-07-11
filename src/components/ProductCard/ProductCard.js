import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/context";
// Styles
import { Wrapper, Content, Image } from "./ProductCard.styles";
// Component
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";
// Logo
import InCartLogoIcon from "./../../assets/InCartLogo.svg";
import { addProductsToCart } from "../../helpers";

export default class ProductCard extends Component {
  static contextType = Context;
  state = this.context;
  render() {
    const { product } = this.props;
    const { setSelectedProducts, setAttributes } = this.state;
    const setProudctId = () => {
      localStorage.setItem("id", product.id);
      this.state.setProductId(product.id);
    };
    const { currencies } = this.context;
    const prices = product.prices;
    const selectedCurrencyIndex = JSON.parse(localStorage.getItem("currency")); // Find and return the amount and symbol that matchs the chosen currency

    const productPrice =
      prices &&
      currencies.length &&
      prices.find(
        (price) =>
          selectedCurrencyIndex &&
          price.currency.label === currencies[selectedCurrencyIndex].label
      );

    const productAttributes = product.attributes.map((attribute) => {
      return {
        [attribute.name]: attribute.items[0].displayValue,
        id: product.id,
      };
    });
    const selectedAttributesProps = {
      selectedCurrencyIndex,
      productPrice,
      product,
      productAttributes,
      setSelectedProducts,
      setAttributes,
    };

    return (
      <Wrapper icon={InCartLogoIcon}>
        {product.inStock || !product.inStock ? (
          <Link to={`/${product.id}`} onClick={() => setProudctId()}>
            {!product.inStock && <p className="outofstock">OUT OF STOCK</p>}
            <Image src={product.gallery[0]} inStock={product.inStock} />
          </Link>
        ) : null}
        <Content>
          <a
            href=" "
            onClick={(e) => {
              e.preventDefault();
              addProductsToCart(selectedAttributesProps);
            }}
          >
            <img src={InCartLogoIcon} className="inCartIcon" />
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
