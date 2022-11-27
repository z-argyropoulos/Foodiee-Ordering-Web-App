import { Grid, Stack } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import BusinessIcon from '@mui/icons-material/Business';
import useRestaurantData from '@hooks/data/useRestaurantData';

const ratingCategory = (rating: number) => {
  return rating <= 5
    ? 'Satisfactory'
    : rating <= 8
    ? 'Very Good'
    : 'Excellent';
};

const StoreDetails = () => {
  const { address, rating, deliveryTimeRange } = useRestaurantData();

  return (
    <>
      <Stack sx={{ my: 4 }}>
        <Grid container justifyContent="center" sx={{ my: 1 }}>
          <Grid
            container
            sx={{
              py: 2,
              px: 4,
              maxWidth: '1000px',
              bgcolor: 'black',
              color: 'white',
              border: '5px solid',
              borderRadius: 4,
              borderColor: 'secondary.main',
            }}
            justifyContent="space-between"
            columnSpacing={1}
            alignItems="center">
            <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item sx={{ mt: 0.5 }}>
                  <EmojiEmotionsIcon />
                </Grid>
                <Grid item>
                  {rating && (
                    <>
                      {rating} - {ratingCategory(parseInt(rating))}
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item sx={{ mt: 0.5 }}>
                  <BusinessIcon />
                </Grid>
                <Grid item>
                  {address?.street}, {address?.region},{' '}
                  {address?.postal_code}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item sx={{ mt: 0.5 }}>
                  <TimelapseIcon />
                </Grid>
                <Grid item>
                  {deliveryTimeRange?.join(' - ')} mins
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default StoreDetails;
