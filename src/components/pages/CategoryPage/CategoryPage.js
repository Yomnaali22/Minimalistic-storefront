import React, { Component } from "react";
// Component
import ProductCard from "../../ProductCard/ProductCard";
// Styles
import { Wrapper } from "./CategoryPage.styles";

export default class CategoryPage extends Component {
  render() {
    const { name, products } = this.props.category;
    const categoryName = name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <Wrapper>
        {categoryName === "All" ? (
          <h2>{`${categoryName} Categories`}</h2>
        ) : (
          <h2>{`${categoryName} Category`}</h2>
        )}
        <div className="products-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Wrapper>
    );
  }
}
