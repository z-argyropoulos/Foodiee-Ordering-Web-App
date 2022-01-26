import { roundNumber } from '../functions/roundNumber';

const productSumPrice = (value, quantity) => {
  return roundNumber(value * quantity);
};

const storeSumPrice = (products) => {
  return roundNumber(
    products.reduce((prevValue, curProduct) => {
      return (
        prevValue +
        productSumPrice(curProduct.price, curProduct.quantity)
      );
    }, 0)
  );
};

const storesSumPrice = (carts) => {
  return roundNumber(
    carts.reduce((prevValue, curStore) => {
      return prevValue + storeSumPrice(curStore.products);
    }, 0)
  );
};

export { productSumPrice, storeSumPrice, storesSumPrice };
