import { ChangeEvent, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import CategoryFilters from '@components/CategoryFilters';
import CardsGridWrapper from '@components/shared/CardsGridWrapper';
import { useUser } from '@hooks/useUser';
import useFilteredRestaurants from '@hooks/data/useFilteredRestaurants';
import restaurantCategories from '@models/restaurantCategories';
import type { RestaurantCategoryOptions } from '@models/restaurantCategories';

const StoresList = () => {
  const { address } = useUser();
  const { restaurants, isLoading } = useFilteredRestaurants();
  const [categories, setCategories] = useState(restaurantCategories);

  const handleCategoryChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const categoryKey = event.target.name;

    setCategories((categories) => {
      // toggle category active property
      const delta = {
        [categoryKey]: {
          ...categories[categoryKey],
          active: !categories[categoryKey].active,
        },
      } as RestaurantCategoryOptions;

      return { ...categories, ...delta };
    });
  };

  const clearSelectedCategories = () => {
    setCategories(restaurantCategories);
  };

  const noCategoryIsSelected = Object.values(categories).every(
    (category) => !category.active
  );

  // when no category is selected show all, otherwise
  // show restaurants that belong at least to one
  // selected category
  const filteredRestaurants = noCategoryIsSelected
    ? restaurants
    : restaurants?.filter((restaurant) =>
        restaurant.categories.some(
          (category) => categories[category.toLowerCase()]?.active
        )
      );

  return (
    <Stack sx={{ mt: '75px', mx: 2 }}>
      <Typography variant="h5" sx={{ my: 2, fontStyle: 'italic' }}>
        Showing{' '}
        {address ? `restaurants for ${address}` : 'all restaurants'}
      </Typography>
      <CategoryFilters
        categories={categories}
        handleCategoryChange={handleCategoryChange}
        clearSelectedCategories={clearSelectedCategories}
      />
      <CardsGridWrapper
        loading={isLoading}
        restaurants={filteredRestaurants}
      />
    </Stack>
  );
};

export default StoresList;
