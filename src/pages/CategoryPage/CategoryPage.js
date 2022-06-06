import React, { Component } from "react";
// Component
import ProductCard from "./../../components/ProductCard/ProductCard";
// Styles
import { ProductsContainer, Content } from "./CategoryPage.styles";

export default class CategoryPage extends Component {
  render() {
    const { name, products } = this.props.category;
    const categoryName = name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <>
        {categoryName === "All" ? (
          <Content>{`${categoryName} Categories`}</Content>
        ) : (
          <Content>{`${categoryName} Category`}</Content>
        )}
        <ProductsContainer>
          {
            // Render products
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </ProductsContainer>
      </>
    );
  }
}
