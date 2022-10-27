import CardsGridWrapper from '../components/shared/CardsGridWrapper';
import LandingImage from '../components/LandingImage';
import { Paper } from '@mui/material';
import IRestaurant from '@interfaces/IRestaurant';
import { wrapper } from '@redux/store';
import { fetchAllRestaurants } from '@redux/actions/restaurants';

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

  return (
    <>
      <LandingImage />
      <Paper
        square
        style={{
          backgroundColor: '#242424',
          minHeight: 'calc(100vh - 60px)',
        }}>
        <CardsGridWrapper stores={restaurants} />
      </Paper>
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    await store.dispatch(fetchAllRestaurants());

    return {
      props: {
        restaurants: store.getState().restaurants.restaurants,
      },
      revalidate: 30,
    };
  }
);

export default Home;
