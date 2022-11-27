import CardsGridWrapper from '../components/shared/CardsGridWrapper';
import LandingImage from '../components/LandingImage';
import { Paper } from '@mui/material';
import type IRestaurant from '@interfaces/IRestaurant';
import { wrapper } from '@redux/store';
import { queryAllRestaurantsGQL } from '@redux/actions/restaurants';
import DefaultHead from '@components/head/DefaultHead';
import { useEffect } from 'react';
import { useAppDispatch } from '@hooks/redux/useAppDispatch';

export interface IHomeProps {
  restaurants: [IRestaurant];
}

const Home = ({ restaurants }: IHomeProps) => {
  // Here we use the state (restaurants data) directly from the server
  // But we can only use the state with redux selector as the client
  // redux store has been hydrated with server/static props
  // const { restaurants } = useAppSelector(
  //   (state) => state.restaurants
  // );

  const dispatch = useAppDispatch();
  useEffect(() => {}, [restaurants]);

  return (
    <>
      <DefaultHead />

      <LandingImage />
      <Paper
        square
        style={{
          backgroundColor: '#242424',
          minHeight: 'calc(100vh - 60px)',
        }}>
        <CardsGridWrapper restaurants={restaurants} />
      </Paper>
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    // await store.dispatch(fetchAllRestaurants());
    await store.dispatch(queryAllRestaurantsGQL());

    return {
      props: {
        restaurants: store.getState().restaurants.restaurants,
      },
      revalidate: 30,
    };
  }
);

export default Home;
