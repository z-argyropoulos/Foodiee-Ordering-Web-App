import { Paper, Grid } from '@mui/material';
import BurgerIcon from '../../public/icons/burger.svg';
import CocktailIcon from '../../public/icons/cocktail.svg';
import SaladIcon from '../../public/icons/salad.svg';
import SushiIcon from '../../public/icons/sushi.svg';
import { useSpring, animated } from 'react-spring';
import AddressInput from './AddressInput';
import Image from 'next/image';

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
            <AddressInput />
          </animated.div>
        </Grid>
        <Grid item sm={12} md={6}>
          <animated.div style={fadeUpIcons}>
            <Image
              src={BurgerIcon}
              alt="burger"
              width={100}
              height={100}
            />
            <Image
              src={CocktailIcon}
              alt="Cocktail"
              width={100}
              height={100}
            />
            <Image
              src={SaladIcon}
              alt="Salad"
              width={100}
              height={100}
            />
            <Image
              src={SushiIcon}
              alt="Sushi"
              width={100}
              height={100}
            />
          </animated.div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LandingImage;
