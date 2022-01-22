import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { InputAdornment, Button, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useUser } from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { PATH_STORES } from '../routes/paths';

const mockAddresses = ['Address 1', 'Address 2', 'Address 3'];

const AddressInput = () => {
  const { setAddress } = useUser();

  const navigate = useNavigate();

  const [addressInput, setAddressInput] = useState('');

  const submit = () => {
    setAddress(addressInput);
    // redirect to stores list delivering
    // to this address ("supposed to")
    navigate(PATH_STORES.root);
  };

  const handleChange = (e, v) => {
    setAddressInput(v ? v : e.target.value);
  };

  const handlePress = (e) => {
    // on 'enter' pressed, update user context
    if (e.keyCode === 13) {
      submit();
    }
  };

  return (
    <Grid
      container
      alignItems="center"
      sx={{ mt: 6 }}
      columnSpacing={2}
      rowSpacing={2}>
      <Grid item md={9} xs={12}>
        <Autocomplete
          freeSolo
          id="address-input"
          options={mockAddresses}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Address"
              color="info"
              focused
              placeholder="Enter your address to get started"
              onKeyDown={handlePress}
              onChange={handleChange}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon sx={{ color: 'text.primary' }} />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid item md={3} xs={12}>
        <Button
          variant="contained"
          color="info"
          sx={{
            backgroundColor: 'secondary.main',
            color: 'black',
            borderRadius: '0px',
            fontSize: '1.05em',
            py: 1.3,
            px: 3.2,
            width: '100%',
          }}
          onClick={submit}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddressInput;
