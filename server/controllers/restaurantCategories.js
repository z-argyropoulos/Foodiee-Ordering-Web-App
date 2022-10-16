const {
  addRestaurantCategory,
} = require('../actions/restaurant/category');

const restaurantCategoryController = {
  create: (req, res) => {
    // add category
    addRestaurantCategory(req.body)
      .then((doc) => res.status(200).json({ category: doc }))
      .catch((err) => res.status(400).json({ error: err.message }));
  },
};

module.exports = restaurantCategoryController;
