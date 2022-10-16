const router = require('express').Router();
const { addItem } = require('../../../db/actions/item');

const createItem = (req, res) => {
  addItem(req.body)
    .then((item) => res.status(200).json({ item }))
    .catch((err) => res.status(400).json({ error: err.message }));
};

router.post('/create', createItem);

module.exports = router;
