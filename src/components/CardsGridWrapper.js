import { React, useState } from 'react';
import CardRestaurant from './CardRestaurant';
import { Grid } from '@mui/material';
import CardRestaurantSkeleton from './CardRestaurantSkeleton';

// server restaurant data
const dataArray = [
  {
    id: 234234,
    name: 'Five Guys',
    description:
      'An American fast casual restaurant chain focused on hamburgers, hot dogs, and French fries.',
    tags: ['Burgers', 'Milkshakes', 'Fries'],
    expectedTime: '20min',
    minOrder: '5€',
  },
  {
    id: 23432423,
    name: "Wendy's Burgers",
    description:
      'It’s time for a girl to show how it’s done, right. Wendy’s has arrived…with hot, fresh, juicy burgers that are served FRESH off the grill, NOT the warming tray…',
    tags: ['Burgers', 'Chicken', 'Fish'],
    expectedTime: '30min',
    minOrder: '10€',
  },
  {
    id: 2342345,
    name: 'Shake Shack',
    description:
      'Modern day version of a roadside burger stand serving delicious burgers, chicken, hot dogs, shakes, frozen custard, beer, wine & more',
    tags: ['Milkshakes', 'Hot Dogs', 'Vegeterian'],
    expectedTime: '15min',
    minOrder: '3€',
  },
  {
    id: 234111,
    name: 'Health It!',
    description:
      'Great selection of juices and other healthy bites such as salads and energy bars.',
    tags: ['Vegeterian', 'Salads', 'Healthy'],
    expectedTime: '45min',
    minOrder: '9€',
  },
];

const CardsGridWrapper = () => {
  const [loading, setLoading] = useState(true);

  // IIFE to delay showing results -> skeleton
  (function fakeDelayServer() {
    setTimeout(() => {
      setLoading(false);
    }, 2.5 * 1000);
  })();

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
        dataArray.map((restaurant) => (
          <Grid key={restaurant.id} item xs={12} sm={6} lg={3}>
            <CardRestaurant {...restaurant} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default CardsGridWrapper;
