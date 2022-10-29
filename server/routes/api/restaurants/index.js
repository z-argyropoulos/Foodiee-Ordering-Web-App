const router = require('express').Router();
const restaurantController = require('../../../controllers/restaurant');

// add new restaurant to db
router.post('/create', restaurantController.create);
// get all restaurants from db
router.get('/', restaurantController.getAll);
// get specific restaurant
router.get('/byId', restaurantController.getById);
// we keep this endpoint for the previous ui
// version that had the catalog embedded inside
// of the restaurant document
router.get('/byIdLegacy', restaurantController.getByIdLegacy);
router.get('/paths', restaurantController.getRestaurantsPaths);

router.use('/categories', require('./categories'));

module.exports = router;
