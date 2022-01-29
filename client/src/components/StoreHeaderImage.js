import { Card, Box, Typography } from '@mui/material';
import { useStoreData } from '../hooks/useStoreData';
import CloudinaryImage from './shared/CloudinaryImage';

const styles = {
  card: {
    position: 'relative',
    height: '45vh',
  },
  overlayText: {
    padding: '1rem',
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundImage:
      'linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))',
    width: '95%',
    fontSize: '0.97em',
  },
};

const StoreHeaderImage = () => {
  const { _id: id, name, description } = useStoreData();
  return (
    <>
      <Card style={styles.card}>
        <CloudinaryImage
          publicId={`store_covers/${id}`}
          height="1000"
          width={2000}
          styles={{
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
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
