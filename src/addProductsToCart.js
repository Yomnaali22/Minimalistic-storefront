const selectedCurrencyIndex = JSON.parse(localStorage.getItem("currency"));

export const countProduct = (product, selectedProducts) => {
  const count =
    selectedProducts &&
    selectedProducts.reduce(
      (initialValue, currentProduct) =>
        currentProduct.id === product.id ? ++initialValue : initialValue,
      0
    );
  return count;
};

const addProduct = (
  product,
  productPrice,
  selectedProducts,
  setSelectedProducts
) => {
  if (product.inStock && !countProduct(product, selectedProducts)) {
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
  }
};

const findProductPrice = (product, currencies) => {
  const productPrice =
    product.prices &&
    currencies.length &&
    product.prices.find(
      (price) =>
        selectedCurrencyIndex &&
        price.currency.label === currencies[selectedCurrencyIndex].label
    );
  return productPrice;
};

export const addProductsToCart = (
  product,
  setSelectedProducts,
  currencies,
  selectedProducts
) => {
  if (!countProduct(product, selectedProducts)) {
    findProductPrice(currencies);
    addProduct(
      product,
      findProductPrice(product, currencies),
      selectedProducts,
      setSelectedProducts
    );
  }
};
