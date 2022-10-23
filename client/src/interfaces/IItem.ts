interface IItem {
  _id: string;
  title: string;
  description?: string;
  price: number;
  quantity: number;
  category: string;
}

export default IItem;
