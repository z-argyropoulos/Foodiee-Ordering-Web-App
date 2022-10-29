import IAddress from './IAddress';
import type ICategoryItems from './ICategoryItems';

interface IRestaurant {
  _id: string;
  name: string;
  description?: string;
  address: IAddress;
  categories: string[];
  rating: string;
  deliveryTimeRange: number[];
  minOrder: string;
  isOpen: boolean;
  catalog: ICategoryItems[];
}

export default IRestaurant;
