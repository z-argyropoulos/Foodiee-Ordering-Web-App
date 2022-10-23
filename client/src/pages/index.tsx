import CardsGridWrapper from '../components/shared/CardsGridWrapper';
import LandingImage from '../components/LandingImage';
import { Paper } from '@mui/material';
import { getStores } from '../services/stores';
import IRestaurant from '@interfaces/IRestaurant';

export interface IHomeProps {
  restaurants: [IRestaurant];
}

const Home = ({ restaurants }: IHomeProps) => {
  return (
    <>
      <LandingImage />
      <Paper
        square
        style={{
          backgroundColor: '#242424',
          minHeight: 'calc(100vh - 60px)',
        }}
      >
        <CardsGridWrapper stores={restaurants} />
      </Paper>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await getStores();
  const { restaurants } = response.data;

  return {
    props: {
      restaurants,
    },
    revalidate: 30,
  };
};

export default Home;
