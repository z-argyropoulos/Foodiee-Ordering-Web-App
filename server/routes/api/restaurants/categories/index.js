const router = require('express').Router();
const restaurantCategoryController = require('../../../../db/controllers/restaurantCategories');

router.post('/create', restaurantCategoryController.create);

module.exports = router;
