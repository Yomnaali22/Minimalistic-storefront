import React, { Component } from "react";
// Component
import ProductCard from "./../../components/ProductCard/ProductCard";
// Styles
import { Wrapper, ProductsContainer, Content } from "./CategoryPage.styles";

export default class CategoryPage extends Component {
  render() {
    const { name, products } = this.props.category;
    const categoryName = name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <Wrapper>
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
      </Wrapper>
    );
  }
}
