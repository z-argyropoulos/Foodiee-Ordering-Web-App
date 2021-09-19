import React from 'react';
import { Paper, Grid, Chip } from '@mui/material';

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
            <Grid item>
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
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardRestaurant;
