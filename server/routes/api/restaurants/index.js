const router = require('express').Router();
const {
  addRestaurant,
  getRestaurants,
  getRestaurantDetails,
} = require('../../../db/actions/restaurant');
const {
  getItemsByRestaurantId,
} = require('../../../db/actions/item');
const { groupByKey } = require('../../../helpers/group');

// add new restaurant to db
router.post('/create', (req, res) => {
  // save restaurant to DB
  addRestaurant(req.body)
    .then((doc) => res.status(200).json({ restaurant: doc }))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// get all restaurants from db
router.get('/', (_, res) => {
  getRestaurants()
    .then((restaurants) => {
      res.status(200).json({ restaurants });
    })
    .catch((err) => res.status(400).json({ error: err.message }));
});

// get specific restaurant
router.get('/byId', (req, res) => {
  const { restaurantId } = req.query;
  getRestaurantDetails(restaurantId)
    .then((restaurant) => {
      res.status(200).json({ restaurant });
    })
    .catch((err) => res.status(400).json({ error: err.message }));
});

// we keep this endpoint for the previous ui
// version that had the catalog embedded inside
// of the restaurant document
router.get('/byIdLegacy', (req, res) => {
  const { restaurantId } = req.query;

  const restaurantPromise = getRestaurantDetails(restaurantId);
  const catalogPromise = getItemsByRestaurantId(restaurantId);

  Promise.all([restaurantPromise, catalogPromise])
    .then(([restaurant, catalogItems]) => {
      // group catalog items by category
      // {"categoryName": [item]}
      const groupedItemsObject = groupByKey(catalogItems, 'category');
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
});

router.use('/categories', require('./categories'));

module.exports = router;
