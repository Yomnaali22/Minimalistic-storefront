import React, { Component } from "react";
// Component
import ProductCard from "./../../components/ProductCard/ProductCard";
// Styles
import { Wrapper, Content } from "./CategoryPage.styles";

export default class CategoryPage extends Component {
  render() {
    const { name, products } = this.props.category;
    return (
      <>
        {name === "all" ? (
          <Content>{`${name} Categories`}</Content>
        ) : (
          <Content>{`${name} Category`}</Content>
        )}
        <Wrapper>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Wrapper>
      </>
    );
  }
}
