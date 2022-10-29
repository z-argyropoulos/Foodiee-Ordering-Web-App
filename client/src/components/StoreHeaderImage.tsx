import { Card, Box, Typography } from '@mui/material';
import useRestaurantData from '@hooks/data/useRestaurantData';
import CloudinaryImage from './shared/CloudinaryImage';

const styles = {
  card: {
    position: 'relative',
    maxHeight: '45vh',
  },
  overlayText: {
    padding: '1rem 0',
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundImage:
      'linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))',
    width: '100%',
    fontSize: '0.97em',
  },
} as const;

const StoreHeaderImage = () => {
  const { _id: id, name, description } = useRestaurantData();

  return (
    <>
      <Card style={styles.card}>
        <CloudinaryImage publicId={`store_covers/${id}`} size="lg" />
        <div style={styles.overlayText}>
          <div style={{ maxWidth: '95%', margin: '0 auto' }}>
            <Typography variant="h3">{name}</Typography>
            <Box>{description}</Box>
          </div>
        </div>
      </Card>
    </>
  );
};

export default StoreHeaderImage;
