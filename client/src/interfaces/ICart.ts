import type IItem from '@interfaces/IItem';
import IRestaurant from './IRestaurant';

export interface IStoreCart {
  // from Item interface include only _id and quanity properties
  // and get the types from these interface properties
  items: Pick<IItem, '_id' | 'quantity'>[];
  name: Pick<IRestaurant, 'name'>;
}

export interface ICart {
  [storeId: string]: IStoreCart;
}

export type LegacyICart = LegacyIStoreCart[];

type LegacyIStoreCart = {
  storeId: string;
  products: { productId: string; quantity: number }[];
};

// export const leagcyCart = [
//   {
//     storeId: '',
//     products: [{ productId: '', quantity: 0 }],
//   },
// ];

// const store: ICart = {
//   asdfasdf34rasdsafa: {
//     items: [
//       {
//         _id: 'asdf',
//         quantity: 4,
//       },
//     ],
//   },
// };

export default ICart;
