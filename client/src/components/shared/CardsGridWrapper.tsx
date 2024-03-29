import CardRestaurant from '../CardRestaurant';
import { Grid } from '@mui/material';
import CardRestaurantSkeleton from '../CardRestaurantSkeleton';
import { useSpring, animated } from 'react-spring';
import type IRestaurant from '@interfaces/IRestaurant';

export interface ICardsGridWrapper {
  restaurants: IRestaurant[] | undefined;
  loading?: boolean;
}

const CardsGridWrapper = ({
  restaurants,
  loading = false,
}: ICardsGridWrapper) => {
  // card animation
  const props = useSpring({
    to: { opacity: loading ? 0 : 1 },
    from: { opacity: 0 },
    delay: 150,
  });

  return (
    <>
      <Grid
        container
        sx={{ p: 2, mt: 0 }}
        justifyContent="center"
        rowSpacing={3}
        columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
        {loading ? (
          <CardRestaurantSkeleton amount={8} />
        ) : (
          restaurants?.map((restaurant) => (
            <Grid key={restaurant._id} item xs={12} sm={6} lg={3}>
              <animated.div style={props}>
                <CardRestaurant {...restaurant} />
              </animated.div>
            </Grid>
          ))
        )}
      </Grid>
      {!loading &&
        !restaurants?.length &&
        'No restaurants could be found with the selected options. Please remove some filters to expand the search.'}
    </>
  );
};

export default CardsGridWrapper;
