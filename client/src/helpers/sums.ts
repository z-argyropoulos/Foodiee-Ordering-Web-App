import type { LegacyICart } from '@interfaces/ICart';
import { roundNumber } from '../functions/roundNumber';

const productSumPrice = (value: number, quantity: number) => {
  return roundNumber(value * quantity);
};

const storeSumPrice = (
  products: {
    price: number;
    quantity: number;
    [storeProperty: string]: any;
  }[]
) => {
  return roundNumber(
    products.reduce((prevValue, curProduct) => {
      return (
        prevValue +
        productSumPrice(curProduct.price, curProduct.quantity)
      );
    }, 0)
  );
};

const storesSumPrice = (carts: LegacyICart) => {
  return roundNumber(
    carts.reduce((prevValue, curStore) => {
      return prevValue + storeSumPrice(curStore.products);
    }, 0)
  );
};

export { productSumPrice, storeSumPrice /* storesSumPrice */ };
