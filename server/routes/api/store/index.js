const router = require('express').Router();
const { addStore } = require('../../../db/actions/store');
const { v4: uuidv4 } = require('uuid');

router.post('/addStore', (req, res) => {
  // create store unique id
  const storeId = uuidv4();

  // save store to DB
  addStore({ id: storeId, ...req.body })
    .then((doc) => res.status(200).json({ store: doc }))
    .catch((err) => res.status(400).json({ error: err._message }));
});

module.exports = router;
