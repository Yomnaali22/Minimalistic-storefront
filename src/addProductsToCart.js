// Want to buy products
const selectedProducts = JSON.parse(localStorage.getItem("SelectedProducts"))
  ? JSON.parse(localStorage.getItem("SelectedProducts"))
  : [];

const selectedCurrencyIndex = JSON.parse(localStorage.getItem("currency"));

export const countProduct = (product) => {
  return selectedProducts.reduce(
    (initialValue, currentProduct) =>
      currentProduct.id === product.id ? ++initialValue : initialValue,
    0
  );
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

const addProduct = (product, productPrice) => {
  if (product.inStock) {
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
      attributes: product.attributes.map((attribute) => {
        return {
          [attribute.name]: attribute.items[0].displayValue,
          id: product.id,
        };
      }),
    });
  }
};

export const addProductsToCart = (
  product,
  setSelectedProducts,
  setAttributes,
  currencies
) => {
  if (!countProduct(product)) {
    addProduct(product, findProductPrice(currencies));
    setSelectedProducts(selectedProducts);
    //getProductAttributes(product);
    // setAttributes(selectedAttributes);
  }
};
