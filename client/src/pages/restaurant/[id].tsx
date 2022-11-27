import { useRouter } from 'next/router';
import { Stack, Grid, TextField, InputLabel } from '@mui/material';
import StoreHeaderImage from '@components/StoreHeaderImage';
import StoreDetails from '@components/StoreDetails';
import StoreProductCatalog from '@components/StoreProductCatalog';
import StoreCart from '@components/StoreCart';
import { wrapper } from '@redux/store';
import { fetchRestaurantById } from '@redux/actions/restaurant';
import { InferGetStaticPropsType } from 'next';
import { getRestaurantsPaths } from '@services/restaurants';
import { ParsedUrlQuery } from 'querystring';
import RestaurantHead from '@components/head/RestaurantHead';
import IRestaurant from '@interfaces/IRestaurant';

interface IParams extends ParsedUrlQuery {
  id: string;
}

const Store = ({
  restaurant,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    query: { id: storeId },
  } = useRouter();

  return (
    <>
      <RestaurantHead restaurantName={restaurant.name} />
      <Stack sx={{ mt: '75px', mx: 2 }}>
        <StoreHeaderImage />
        <StoreDetails />
        <InputLabel sx={{ mb: 1 }} error required>
          First name
        </InputLabel>
        <TextField error />
        <Grid container>
          <Grid item md={8}>
            <StoreProductCatalog />
          </Grid>
          <Grid item md={4} sx={{ px: 3 }}>
            <StoreCart storeId={storeId} />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export const getStaticPaths = async () => {
  const {
    data: { paths },
  } = await getRestaurantsPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      const { id: restaurantId } = params as IParams;

      await store.dispatch(fetchRestaurantById(restaurantId));

      return {
        props: {
          restaurant: store.getState().restaurant
            .restaurant as IRestaurant,
        },
        revalidate: 60,
      };
    }
);

export default Store;
