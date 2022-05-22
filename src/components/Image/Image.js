import React, { Component } from "react";

export default class Image extends Component {
  render() {
    const { product } = this.props;
    return (
      <>
        {product.gallery.map((image) => {
          return product.inStock ? (
            <img src={image} id={product.id} />
          ) : (
            <img src={image} id={product.id} className="OutOfStockImage" />
          );
        })}
      </>
    );
  }
}
