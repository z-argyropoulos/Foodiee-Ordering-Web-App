const router = require('express').Router();

router.get('/', (_, res) => {
  res.status(200).send('Welcome to the Foodiee API');
});

router.use('/store', require('./store'));

module.exports = router;
