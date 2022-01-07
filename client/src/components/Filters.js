import { useState, useId, useEffect } from 'react';
import {
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  Grid,
} from '@mui/material';

const Filters = ({ stores, setFilteredStores, setLoading }) => {
  const [checkedCategories, setCheckedCategories] = useState([]);

  // FILTERS (could be split in different components)
  // Category filter
  const categories = [
    { title: 'Souvlaki', id: useId() },
    { title: 'Pizza', id: useId() },
    { title: 'Burger', id: useId() },
    { title: 'Sushi', id: useId() },
  ];

  const handleChange = (event) => {
    const selectedCategory = event.target.name;
    if (checkedCategories.includes(selectedCategory)) {
      setCheckedCategories((prevState) =>
        [...prevState].filter(
          (category) => category !== selectedCategory
        )
      );
    } else {
      setCheckedCategories((prevState) => [
        ...prevState,
        event.target.name,
      ]);
    }
  };

  // Update stores on filter changes
  useEffect(() => {
    if (checkedCategories.length) {
      setLoading(true);
      setFilteredStores(
        stores.filter((store) => {
          for (const category of store.categories) {
            if (checkedCategories.includes(category)) {
              return true;
            }
          }
          return false;
          // store.categories.includes(checkedCategories[0]);
        })
      );
      setLoading(false);
    } else {
      setFilteredStores(stores);
    }
  }, [checkedCategories, setFilteredStores, stores, setLoading]);

  return (
    <div>
      <Typography variant="h5">Filters</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Categories</FormLabel>
        <FormGroup>
          <Grid container>
            <Grid item>
              <FormControlLabel
                key="any"
                control={
                  <Checkbox
                    checked={!checkedCategories.length}
                    name="Any"
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label="Any"
              />
            </Grid>

            {categories.map((category) => (
              <Grid item>
                <FormControlLabel
                  key={category.id}
                  control={
                    <Checkbox
                      checked={checkedCategories[category.title]}
                      name={category.title}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  }
                  label={category.title}
                />
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default Filters;
