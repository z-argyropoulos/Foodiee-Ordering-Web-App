import './LandingImage.css';
import { React } from 'react';
import { Paper, Grid } from '@mui/material';
import BurgerIcon from '../icons/burger.svg';
import CocktailIcon from '../icons/cocktail.svg';
import SaladIcon from '../icons/salad.svg';
import SushiIcon from '../icons/sushi.svg';
import { useSpring, animated } from 'react-spring';

const LandingImage = () => {
  const fadeUpIcons = useSpring({
    to: { y: 0, opacity: 1 },
    from: { y: 50, opacity: 0 },
    delay: 800,
  });

  const slideInText = useSpring({
    to: { x: 0, opacity: 1 },
    from: { x: -50, opacity: 0 },
  });

  return (
    <Paper
      square
      sx={{
        bgcolor: 'black',
        height: '600px',
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
          <animated.div style={slideInText}>
            <h1>
              Order from multiple restaurants and get them all
              together!
            </h1>
            <p>
              No more disagreements with friends on what to order on a
              late night.
            </p>
          </animated.div>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          sx={{ mt: 3, display: 'flex' }}
          className="landingPage-icons">
          <animated.div style={fadeUpIcons}>
            <img src={BurgerIcon} alt="burger" />
            <img src={CocktailIcon} alt="Cocktail" />
            <img src={SaladIcon} alt="Salad" />
            <img src={SushiIcon} alt="Sushi" />
          </animated.div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LandingImage;
