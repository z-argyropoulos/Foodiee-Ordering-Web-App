import React from 'react';
import { Card, CardMedia, Box, Typography } from '@mui/material';

const styles = {
  card: {
    position: 'relative',
  },
  overlayText: {
    padding: '1rem',
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundImage:
      'linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))',
    width: '100%',
  },
};

const StoreHeaderImage = ({ _id, name, description }) => {
  return (
    <>
      <Card style={styles.card}>
        <CardMedia
          component="img"
          height="400"
          image={`${process.env.PUBLIC_URL}/img/restaurants/headers/${_id}.jpg`}
        />
        <div style={styles.overlayText}>
          <Typography variant="h3">{name}</Typography>
          <Box>{description}</Box>
        </div>
      </Card>
    </>
  );
};

export default StoreHeaderImage;
