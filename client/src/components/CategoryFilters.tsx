import { ChangeEvent } from 'react';
import {
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  Grid,
  Button,
  Box,
} from '@mui/material';
import type { RestaurantCategoryOptions } from '@models/restaurantCategories';

export interface IFiltersProps {
  categories: RestaurantCategoryOptions;
  handleCategoryChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  clearSelectedCategories: () => void;
}

const CategoryFilters = ({
  categories,
  handleCategoryChange,
  clearSelectedCategories,
}: IFiltersProps) => {
  return (
    <Box>
      <Typography variant="h5">Filters</Typography>
      <Box sx={{ mt: 1 }}>
        <FormControl component="fieldset">
          <Grid>
            <FormLabel component="span">Categories</FormLabel>
            <Button
              variant="contained"
              size="small"
              sx={{ mx: 1 }}
              onClick={clearSelectedCategories}>
              Clear
            </Button>
          </Grid>
          <FormGroup>
            <Grid container>
              {Object.entries(categories).map(
                ([categoryKey, category]) => (
                  <Grid item key={categoryKey}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={categories[categoryKey].active}
                          name={categoryKey}
                          onChange={handleCategoryChange}
                          inputProps={{ 'aria-label': 'controlled' }}
                        />
                      }
                      label={category.label}
                    />
                  </Grid>
                )
              )}
            </Grid>
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default CategoryFilters;
