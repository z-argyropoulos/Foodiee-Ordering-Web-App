const router = require('express').Router();

router.get('/', (_, res) => {
  res.status(200).send('Foodiee REST API');
});

router.use('/restaurants', require('./restaurants'));
router.use('/items', require('./items'));

module.exports = router;
