const router = require('express').Router();
const restaurantCategoryController = require('../../../../controllers/restaurantCategories');

router.post('/create', restaurantCategoryController.create);

module.exports = router;
