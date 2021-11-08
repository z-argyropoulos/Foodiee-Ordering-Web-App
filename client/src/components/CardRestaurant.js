import React from 'react';
import { Paper, Grid, Chip, Typography } from '@mui/material';
import EuroIcon from '@mui/icons-material/Euro';
import TimelapseIcon from '@mui/icons-material/Timelapse';

const CardRestaurant = ({
  _id,
  name,
  description,
  categories,
  rating,
  deliveryTimeRange,
  minOrder,
}) => {
  return (
    <Paper elevation={4}>
      <Grid container>
        <Grid item>
          <img
            src={
              process.env.PUBLIC_URL + `img/restaurants/${_id}.jpg`
            }
            alt={name + ' restaurant'}
            style={{
              objectFit: 'cover',
              width: '100%',
            }}
          />
        </Grid>
        <Grid container item>
          <Grid container item direction="column" sx={{ p: 2 }}>
            <Grid item>
              <h3>{name}</h3>
            </Grid>
            <Grid item>
              <p>{description}</p>
            </Grid>
            <Grid item sx={{ mt: 1, mb: 1 }}>
              {categories.sort().map((category) => (
                <Chip
                  key={category}
                  label={category}
                  variant="outlined"
                  color="secondary"
                  sx={{ mr: 1, mb: 2 }}
                  onClick={() => {}}
                />
              ))}
            </Grid>
            <Grid container item sx={{ textAlign: 'center', mt: 1 }}>
              <Grid
                container
                item
                sx={{ justifyContent: 'center', fontSize: '0.8em' }}
                xs={6}>
                <Grid item xs={12}>
                  <EuroIcon sx={{ mb: 1 }} />
                </Grid>
                <Grid item>
                  <Typography variant="h6">Min. Order</Typography>
                  {minOrder}
                </Grid>
              </Grid>
              <Grid
                container
                item
                sx={{ justifyContent: 'center', fontSize: '0.8em' }}
                xs={6}>
                <Grid item xs={12}>
                  <TimelapseIcon sx={{ mb: 1 }} />
                </Grid>
                <Grid item>
                  <Typography variant="h6">Delivery time</Typography>
                  {deliveryTimeRange.join('-')} mins
                </Grid>
              </Grid>
              <Grid
                container
                item
                sx={{
                  justifyContent: 'center',
                  fontSize: '0.8em',
                  mt: 3,
                }}
                xs={12}>
                <Grid item xs={12}>
                  <Typography variant="h6">Rating</Typography>
                </Grid>
                <Grid item>{rating}</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardRestaurant;
