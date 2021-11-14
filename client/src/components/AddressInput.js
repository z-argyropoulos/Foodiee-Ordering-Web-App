import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { InputAdornment } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const mockAddresses = ['Address 1', 'Address 2', 'Address 3'];

const AddressInput = () => {
  return (
    <>
      <Autocomplete
        freeSolo
        id="address-input"
        options={mockAddresses}
        sx={{ mt: 6 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Address"
            color="info"
            focused
            placeholder="Enter your address to get started"
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
    </>
  );
};

export default AddressInput;
