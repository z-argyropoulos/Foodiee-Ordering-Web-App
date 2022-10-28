export interface IRestaurantCategoryOption {
  label: string;
  active: boolean;
}

export type RestaurantCategoryOptions = Record<
  string,
  IRestaurantCategoryOption
>;

const restaurantCategories: RestaurantCategoryOptions = {
  souvlaki: {
    label: 'Souvlaki',
    active: false,
  },
  pizza: {
    label: 'Pizza',
    active: false,
  },
  burger: {
    label: 'Burger',
    active: false,
  },
  sushi: {
    label: 'Sushi',
    active: false,
  },
};

export default restaurantCategories;
