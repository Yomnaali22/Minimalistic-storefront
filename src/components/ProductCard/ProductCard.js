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
  Ref = React.createRef();
  static contextType = Context;
  state = this.context;
  render() {
    const { product } = this.props;
    const { currencies } = this.context;
    const { setSelectedProducts, setAttributes } = this.state;
    const setProudctId = () => {
      localStorage.setItem("id", product.id);
      this.state.setProductId(product.id);
    };

    const handleAlreadyInCartAlert = () => {
      if (countProduct(product)) {
        this.Ref.current.innerText = "Item already in cart";
        this.Ref.current.style.backgroundColor = "rgb(0, 0, 0, 0.2)";
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
              addProductsToCart(
                product,
                setSelectedProducts,
                setAttributes,
                currencies
              );
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
