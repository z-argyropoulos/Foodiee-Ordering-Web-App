import React from 'react';
import CardRestaurant from './CardRestaurant';
import { Grid } from '@mui/material';

// fetch data
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
];

const CardsGridWrapper = () => {
  return (
    <Grid
      container
      sx={{ p: 5, mt: 0 }}
      justifyContent="center"
      rowSpacing={3}
      columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
      {dataArray.map((restaurant) => (
        <Grid key={restaurant.id} item xs={12} sm={6} lg={4}>
          <CardRestaurant {...restaurant} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsGridWrapper;
