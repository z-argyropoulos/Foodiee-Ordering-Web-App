const productSumPrice = (value, quantity) => {
  return value * quantity;
};

const storeSumPrice = (products) => {
  return products.reduce((prevValue, curProduct) => {
    return (
      prevValue +
      productSumPrice(curProduct.price, curProduct.quantity)
    );
  }, 0);
};

const storesSumPrice = (carts) => {
  return carts.reduce((prevValue, curStore) => {
    return prevValue + storeSumPrice(curStore.products);
  }, 0);
};

export { productSumPrice, storeSumPrice, storesSumPrice };
