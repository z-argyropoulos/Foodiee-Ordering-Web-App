import { useState } from 'react';
import Box from '@mui/material/Box';
import SwipableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import sidebarConfig from '../layout/sidebarConfig';
import Link from 'next/link';

const MenuDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const menuList = (
    <Box
      sx={{
        width: '15vw',
        minWidth: '200px',
      }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <List>
        {sidebarConfig.map((menuItem) => (
          <Link
            key={menuItem.path}
            style={navLinkStyle}
            href={menuItem.path}>
            <a>
              <ListItem button key={menuItem.path}>
                <ListItemText primary={menuItem.title} />
              </ListItem>
            </a>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <SwipableDrawer
        open={openDrawer}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}>
        {menuList}
      </SwipableDrawer>
    </div>
  );
};

export default MenuDrawer;
