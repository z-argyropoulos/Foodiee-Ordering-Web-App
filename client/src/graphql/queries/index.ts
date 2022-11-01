import restaurantQueries from '@graphql/queries/restaurants';
import gqlQuery from '@graphql/utils/gqlQuery';
import type IRestaurant from '@interfaces/IRestaurant';

interface IRestaurantVariables {
  id: string;
}

const getRestaurantQuery = () => {
  return gqlQuery<IRestaurant, IRestaurantVariables>(
    restaurantQueries.GET_RESTAURANT_BY_ID,
    {
      variables: { id: '61f31838260e31ec96e3b37f' },
    }
  );
};

const getAllRestaurantsQuery = () => {
  return gqlQuery<{ restaurants: IRestaurant[] }>(
    restaurantQueries.GET_ALL_RESTAURANTS
  );
};

export { getRestaurantQuery, getAllRestaurantsQuery };
