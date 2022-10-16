const {
  addRestaurant,
  getRestaurants,
  getRestaurantDetails,
} = require('../actions/restaurant');
const { getItemsByRestaurantId } = require('../actions/item');
const { groupByKey } = require('../helpers/group');

const restaurantController = {
  create: (req, res) => {
    // save restaurant to DB
    addRestaurant(req.body)
      .then((doc) => res.status(200).json({ restaurant: doc }))
      .catch((err) => res.status(400).json({ error: err.message }));
  },

  getAll: (_, res) => {
    getRestaurants()
      .then((restaurants) => {
        res.status(200).json({ restaurants });
      })
      .catch((err) => res.status(400).json({ error: err.message }));
  },

  getById: (req, res) => {
    const { restaurantId } = req.query;
    getRestaurantDetails(restaurantId)
      .then((restaurant) => {
        res.status(200).json({ restaurant });
      })
      .catch((err) => res.status(400).json({ error: err.message }));
  },

  getByIdLegacy: (req, res) => {
    const { restaurantId } = req.query;

    const restaurantPromise = getRestaurantDetails(restaurantId);
    const catalogPromise = getItemsByRestaurantId(restaurantId);

    Promise.all([restaurantPromise, catalogPromise])
      .then(([restaurant, catalogItems]) => {
        // group catalog items by category
        // {"categoryName": [item]}
        const groupedItemsObject = groupByKey(
          catalogItems,
          'category'
        );
        const catalog = Object.entries(groupedItemsObject).map(
          ([key, value]) => ({
            category: key,
            items: value,
          })
        );

        res
          .status(200)
          .json({ restaurant: { ...restaurant._doc, catalog } });
      })
      .catch((err) => res.status(400).json({ error: err.message }));
  },
};

module.exports = restaurantController;
