import { React, useState } from 'react';
import CardRestaurant from './CardRestaurant';
import { Grid } from '@mui/material';
import CardRestaurantSkeleton from './CardRestaurantSkeleton';
import { useSpring, animated } from 'react-spring';

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
  {
    id: 345,
    name: 'Macarooooon',
    description: 'Colorful, playful macarons for sweet tooth people.',
    tags: ['Macarons', 'Sweets', 'Gluten Free'],
    expectedTime: '30min',
    minOrder: '5€',
  },
  {
    id: 2342,
    name: 'Korean Cuisine',
    description:
      'Cupcake ipsum dolor sit amet halvah topping icing jelly beans. Jelly beans icing macaroon chocolate cake sweet roll jelly. Pudding gummies toffee pudding sugar plum halvah halvah pastry.',
    tags: ['Rice', 'Vegetables', 'Seafood'],
    expectedTime: '25min',
    minOrder: '12€',
  },
  {
    id: 3421,
    name: 'ShaCKE ShaCKE',
    description:
      'Donec varius egestas mauris. Duis sit amet turpis lacinia, vulputate lectus vitae, lacinia lacus. Morbi vehicula, ex dapibus porttitor vehicula, felis velit tempor lectus, placerat vulputate libero leo sit amet justo.',
    tags: ['Milkshakes', 'Cocktails', 'Drinks'],
    expectedTime: '25min',
    minOrder: '12€',
  },
  {
    id: 4523,
    name: "Sushi O'Clock",
    description:
      'Duis sit amet turpis lacinia, vulputate lectus vitae, lacinia lacus. Morbi vehicula, ex dapibus porttitor vehicula, felis velit tempor lectus, placerat vulputate libero leo sit amet justo.',
    tags: ['Sushi', 'Fish', 'Vegeterian'],
    expectedTime: '15min',
    minOrder: '10€',
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
        dataArray.map((restaurant) => (
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
