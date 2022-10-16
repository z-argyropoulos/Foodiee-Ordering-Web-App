const router = require('express').Router();
const itemsController = require('../../../controllers/items');

router.post('/create', itemsController.create);

module.exports = router;
