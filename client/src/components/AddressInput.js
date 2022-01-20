import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { InputAdornment } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useUser } from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { PATH_STORES } from '../routes/paths';

const mockAddresses = ['Address 1', 'Address 2', 'Address 3'];

const AddressInput = () => {
  const { setAddress } = useUser();

  const navigate = useNavigate();

  const handlePress = (e) => {
    // on enter update user context
    if (e.keyCode === 13) {
      setAddress(e.target.value);
      // redirect to stores list "for this address"
      navigate(PATH_STORES.root);
    }
  };

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
            onKeyDown={handlePress}
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
