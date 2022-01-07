import CardRestaurant from '../CardRestaurant';
import { Grid } from '@mui/material';
import CardRestaurantSkeleton from '../CardRestaurantSkeleton';
import { useSpring, animated } from 'react-spring';

const CardsGridWrapper = ({ stores, loading }) => {
  // card animation
  const props = useSpring({
    to: { opacity: loading ? 0 : 1 },
    from: { opacity: 0 },
    delay: 150,
  });

  return (
    <Grid
      container
      sx={{ p: 2, mt: 0 }}
      justifyContent="center"
      rowSpacing={3}
      columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
      {loading ? (
        <CardRestaurantSkeleton amount={8} />
      ) : (
        stores.map((restaurant) => (
          <Grid key={restaurant._id} item xs={12} sm={6} lg={3}>
            <animated.div style={props}>
              <CardRestaurant {...restaurant} />
            </animated.div>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default CardsGridWrapper;
