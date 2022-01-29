import { React, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Scooter from '../icons/scooter.svg';
import MenuDrawer from './MenuDrawer';
import { PATH_PAGE } from '../routes/paths';
import { Link } from 'react-router-dom';

const MenuAppBar = () => {
  const auth = true;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Adresses</MenuItem>
                <MenuItem onClick={handleClose}>Orders</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuAppBar;
