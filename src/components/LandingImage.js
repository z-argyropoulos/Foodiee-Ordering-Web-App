import './LandingImage.css';
import React from 'react';
import { Paper, Grid } from '@mui/material';
import BurgerIcon from '../icons/burger.svg';
import CocktailIcon from '../icons/cocktail.svg';
import SaladIcon from '../icons/salad.svg';
import SushiIcon from '../icons/sushi.svg';

const LandingImage = () => {
  return (
    <Paper
      square
      sx={{
        bgcolor: 'black',
        height: '550px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Grid
        container
        columnSpacing={25}
        rowSpacing={3}
        sx={{
          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 15,
          },
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Grid item sm={12} md={6}>
          <h1>
            Order from multiple restaurants and get them all together!
          </h1>
          <p>
            No more disagreements with friends on what to order on a
            late night.
          </p>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          sx={{ mt: 3 }}
          className="landingPage-icons">
          <img src={BurgerIcon} alt="burger" />
          <img src={CocktailIcon} alt="Cocktail" />
          <img src={SaladIcon} alt="Salad" />
          <img src={SushiIcon} alt="Sushi" />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LandingImage;
