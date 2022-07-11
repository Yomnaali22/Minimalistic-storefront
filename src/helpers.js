export const addProductsToCart = ({
  selectedCurrencyIndex,
  productPrice,
  product,
  productAttributes,
  setSelectedProducts,
  setAttributes,
}) => {
  // Want to buy products
  const selectedProducts = JSON.parse(localStorage.getItem("SelectedProducts"))
    ? JSON.parse(localStorage.getItem("SelectedProducts"))
    : [];
  const selectedAttributes = JSON.parse(
    localStorage.getItem("SelectedAttributes")
  )
    ? JSON.parse(localStorage.getItem("SelectedAttributes"))
    : [];
  // Count the occurance of each product
  const count = selectedProducts.reduce(
    (initialValue, currentProduct) =>
      currentProduct.id === product.id ? ++initialValue : initialValue,
    0
  );
  // Only Add products with Selected attributes to cart
  if ((!count || product.attributes.length === 0) && product.inStock) {
    selectedProducts.push({
      name: product.name,
      brand: product.brand,
      id: product.id,
      gallery: product.gallery,
      productPrice:
        selectedCurrencyIndex === 0 || !selectedCurrencyIndex
          ? Math.round(product.prices[0].amount)
          : Math.round(productPrice),
      productAmount: 1,
    });
    setSelectedProducts(selectedProducts);

    productAttributes && selectedAttributes.push(...productAttributes);
    setAttributes(selectedAttributes);
  }
};
