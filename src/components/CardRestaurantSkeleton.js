import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

const CardRestaurantSkeleton = ({ amount }) => {
  // amount ||= 4;
  return (
    <>
      {Array.from(new Array(amount)).map((card, index) => (
        <Grid item key={index} xs={12} sm={6} lg={3}>
          <Skeleton variant="rectangular" width="100%" height={300} />
          <Skeleton variant="text" width={150} height={50} />
          <Skeleton
            variant="text"
            width="100%"
            height={200}
            sx={{ m: 0 }}
            style={{ transformOrigin: '0 5%' }}
          />
        </Grid>
      ))}
    </>
  );
};

export default CardRestaurantSkeleton;
