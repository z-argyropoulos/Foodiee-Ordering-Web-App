import { Box, Typography } from '@mui/material';
import { SyncLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      }}>
      <Typography variant="body" gutterBottom>
        Loading
      </Typography>
      <SyncLoader />
    </Box>
  );
};

export default Spinner;
