export const categoriesQuery = `
query {
  categories {
    name
    products {
      name
      id
      inStock
      gallery
      brand
      prices{
        currency{
          label
          symbol
        }
        amount
      } attributes {
        name
        type
        items{
          displayValue
          value
          id
        }
      }

    }
  }
}`;

export const categoriesNamesQuery = `
query{
  categories{
    name
  }
}`;

export const currenciesQuery = `
query{
  currencies{
    label
    symbol
  }
}
`;

export const productQuery = `
query($id: String!){
  product(id: $id){
    name
    id
    description
    inStock
    gallery
    brand
    prices{
      amount
      currency{
        label
        symbol
      }
    }
    attributes{
      id
      name
      type
      items{
        displayValue
        value
        id
      }
    }
  }
}
`;
