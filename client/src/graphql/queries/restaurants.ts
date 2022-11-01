import { gql } from '@apollo/client';

export const GET_ALL_RESTAURANTS = gql`
  query GetAllRestaurants {
    restaurants {
      _id
      name
      description
      categories
      rating
      deliveryTimeRange
      minOrder
    }
  }
`;

export const GET_RESTAURANT_BY_ID = gql`
  query GetRestaurantById($id: ObjectID) {
    restaurant(id: $id) {
      name
    }
  }
`;

const restaurantsQueries = {
  GET_ALL_RESTAURANTS,
  GET_RESTAURANT_BY_ID,
};
export default restaurantsQueries;
