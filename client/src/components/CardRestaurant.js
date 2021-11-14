import React from 'react';
import { Paper, Grid, Chip, Typography } from '@mui/material';
import EuroIcon from '@mui/icons-material/Euro';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
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
    <Paper elevation={4} style={{ overflow: 'hidden' }}>
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
            <Grid
              container
              item
              justifyContent="space-between"
              sx={{
                p: 1,
                mt: 1,
                bgcolor: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(20px)',
                borderRadius: 50,
              }}>
              <Grid container item alignItems="center" xs={4}>
                <EuroIcon sx={{ px: 1, color: 'secondary.main' }} />
                {minOrder}
              </Grid>
              <Grid container item alignItems="center" xs={4}>
                <TimelapseIcon
                  sx={{ px: 1, color: 'secondary.main' }}
                />
                {deliveryTimeRange
                  .map((time) => `${time}'`)
                  .join('-')}
              </Grid>
              <Grid container item alignItems="center" xs={4}>
                <ThumbUpIcon
                  sx={{ px: 1, color: 'secondary.main' }}
                />
                {rating}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardRestaurant;
