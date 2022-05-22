import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/context";
// Styles
import { Wrapper, Content, Image } from "./ProductCard.styles";
// Component
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";

export default class ProductCard extends Component {
  static contextType = Context;
  globalState = this.context;
  render() {
    const { product } = this.props;
    const setProudctId = () => {
      localStorage.setItem("id", product.id);
      this.globalState.setProductId(product.id);
    };
    return (
      <Wrapper>
        {product.inStock || !product.inStock ? (
          <Link to={`/${product.id}`} onClick={() => setProudctId()}>
            {product.inStock === false && (
              <p className="outofstock">OUT OF STOCK</p>
            )}
            <Image src={product.gallery[0]} inStock={product.inStock} />
          </Link>
        ) : null}
        <Content>
          <h1>{product.name}</h1>
          <div className="price">
            <CurrencySwitcher product={product} />
          </div>
        </Content>
      </Wrapper>
    );
  }
}
