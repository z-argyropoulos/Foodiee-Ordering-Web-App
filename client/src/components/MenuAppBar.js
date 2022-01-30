import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Scooter from '../icons/scooter.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import MenuDrawer from './MenuDrawer';
import { PATH_PAGE } from '../routes/paths';
import { Link } from 'react-router-dom';
import { useStoresCart } from '../hooks/useStoresCart';
import { storesSumPrice } from '../helpers/sums';
import StoreCart from './StoreCart';

const MenuAppBar = () => {
  const { carts } = useStoresCart();

  const [openCartList, setOpenCartList] = useState(false);

  const handleOpenCart = () => {
    if (carts.length) setOpenCartList(true);
  };

  const handleCloseCart = () => {
    setOpenCartList(false);
  };

  return (
    <Box sx={{ flexGrow: 1, mb: '50px' }}>
      <AppBar position="fixed">
        <Toolbar>
          <MenuDrawer />
          <Typography
            variant="h6"
            color="secondary"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: 'center',
            }}>
            <Link to={PATH_PAGE.root}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  allignCenter: 'center',
                }}>
                <img
                  src={Scooter}
                  alt="Foodie Logo"
                  style={{ width: '25px' }}
                />
                <Typography variant="h6" sx={{ ml: 1 }}>
                  Foodiee
                </Typography>
              </Box>
            </Link>
          </Typography>
          <div onMouseEnter={handleOpenCart} onClick={handleOpenCart}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexWrap: 'nowrap',
                rowGap: 0.3,
                width: '100px',
                cursor: 'pointer',
              }}>
              <ShoppingCartIcon
                sx={{
                  color:
                    carts.length > 0 ? 'secondary.main' : '#383838',
                  transition: '0.3s ease-in-out',
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{
                  color: carts.length > 0 ? 'white' : '#383838',
                  transition: '0.3s ease-in-out',
                }}>
                Total: {storesSumPrice(carts)} €
              </Typography>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      {openCartList && (
        <Box
          position="fixed"
          zIndex={1000}
          borderRadius="0 0 20px 20px"
          onMouseLeave={handleCloseCart}
          sx={{
            bgcolor: 'rgba(0,0,0,0.75)',
            color: 'white',
            width: '94%',
            maxWidth: '500px',
            margin: '0 auto',
            top: '55px',
            backdropFilter: 'blur(15px)',
            right: { xs: '50%', sm: '0' },
            transform: { xs: 'translateX(50%)', sm: 'initial' },
            transition: '0.2s easy-in-out',
          }}>
          <Box sx={{ width: '90%', margin: '0 auto', pb: 1 }}>
            <CloseIcon
              sx={{
                float: 'right',
                cursor: 'pointer',
              }}
              onClick={handleCloseCart}
            />
            <StoreCart />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MenuAppBar;
