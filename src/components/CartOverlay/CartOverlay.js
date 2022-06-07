import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/context";
// Styles
import { Cart, Overlay, ProductsWrapper } from "./CartOverlay.styles";
// Components
import SelectedProduct from "../SelectedProduct/SelectedProduct";
import ProductsTotalPrice from "../ProductsTotalPrice/ProductsTotalPrice";

export default class CartOverlay extends Component {
  static contextType = Context;
  render() {
    const { setOverlay } = this.context;
    const { isopen } = this.props;

    const selectedProducts =
      JSON.parse(localStorage.getItem("SelectedProducts")) &&
      JSON.parse(localStorage.getItem("SelectedProducts"));

    const productsQuantity =
      selectedProducts &&
      selectedProducts.reduce((total, curr) => total + curr.productAmount, 0);

    return (
      <Overlay isopen={isopen}>
        <Cart>
          {selectedProducts && selectedProducts.length ? (
            <p>
              My Bag, {productsQuantity}
              <span className="items"> items</span>
            </p>
          ) : (
            <p className="emptyCartText">Cart is empty!</p>
          )}
          <ProductsWrapper>
            {selectedProducts &&
              selectedProducts.map(
                (selectedProduct, index, selectedProducts) => {
                  return (
                    <SelectedProduct
                      key={index}
                      selectedProduct={selectedProduct}
                      selectedProducts={selectedProducts}
                    />
                  );
                }
              )}
          </ProductsWrapper>
          {<ProductsTotalPrice className="miniCart" />}
          {
            // Check if SelectedArray isn't empty and product has attributes
            selectedProducts && selectedProducts.length ? (
              <div className="buttons">
                <Link to="/cart" onClick={() => setOverlay(false)}>
                  <button>
                    <span>View Bag</span>
                  </button>
                </Link>
                <Link to="/" onClick={() => setOverlay(false)}>
                  <button>
                    <span>Check out</span>
                  </button>
                </Link>
              </div>
            ) : null
          }
        </Cart>
      </Overlay>
    );
  }
}
