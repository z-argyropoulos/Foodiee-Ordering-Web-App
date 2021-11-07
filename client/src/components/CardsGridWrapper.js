import { React, useState, useEffect } from 'react';
import CardRestaurant from './CardRestaurant';
import { Grid } from '@mui/material';
import CardRestaurantSkeleton from './CardRestaurantSkeleton';
import { useSpring, animated } from 'react-spring';
import { getStores } from '../services/stores';

const CardsGridWrapper = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  // card animation
  const props = useSpring({
    to: { opacity: loading ? 0 : 1 },
    from: { opacity: 0 },
    delay: 150,
  });

  useEffect(() => {
    // fetch all stores
    getStores()
      .then((response) => {
        console.log(response.data.stores);
        setTimeout(() => {
          setLoading(false);
          setStores(response.data.stores);
        }, 2 * 1000);
      })
      .catch((err) => console.log(err));
  }, []);

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
          <Grid key={restaurant.id} item xs={12} sm={6} lg={3}>
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
