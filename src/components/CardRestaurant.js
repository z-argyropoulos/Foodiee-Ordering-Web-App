import React from 'react';
import { Paper, Grid, Chip } from '@mui/material';
import EuroIcon from '@mui/icons-material/Euro';
import TimelapseIcon from '@mui/icons-material/Timelapse';

const CardRestaurant = ({
  id,
  name,
  description,
  tags,
  expectedTime,
  minOrder,
}) => {
  return (
    <Paper elevation={4}>
      <Grid container>
        <Grid item>
          <img
            src={process.env.PUBLIC_URL + `img/restaurants/${id}.jpg`}
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
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
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
                <Grid item>Min. Order {minOrder}</Grid>
              </Grid>
              <Grid
                container
                item
                sx={{ justifyContent: 'center', fontSize: '0.8em' }}
                xs={6}>
                <Grid item xs={12}>
                  <TimelapseIcon sx={{ mb: 1 }} />
                </Grid>
                <Grid item>Delivery time {expectedTime}</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardRestaurant;
