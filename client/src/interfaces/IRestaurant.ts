import IAddress from './IAddress';
import IItem from './IItem';

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
  catalog?: IItem[];
}

export default IRestaurant;
