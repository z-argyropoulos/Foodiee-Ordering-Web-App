const router = require('express').Router();
const {
  addRestaurantCategory,
} = require('../../../../db/actions/restaurant/category');

const createCategory = (req, res) => {
  // add category
  addRestaurantCategory(req.body)
    .then((doc) => res.status(200).json({ category: doc }))
    .catch((err) => res.status(400).json({ error: err.message }));
};

router.post('/create', createCategory);

module.exports = router;
