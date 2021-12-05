export const addressInterface = {
  _id: '',
  street: '',
  region: '',
  postal_code: '',
  city: '',
};

export const productsInterface = {
  _id: '',
  title: '',
  description: '',
  price: 0,
  quantity: 0,
};

export const catalogInterface = {
  category: '',
  products: [productsInterface],
};

export const storeInterface = {
  _id: '',
  name: '',
  description: '',
  address: addressInterface,
  categories: [],
  rating: 0,
  deliveryTimeRange: [],
  minOrder: '',
  isOpen: true,
  catalog: [catalogInterface],
};
