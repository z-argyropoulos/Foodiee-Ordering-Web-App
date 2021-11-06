const router = require('express').Router();
const { addStore, getStores } = require('../../../db/actions/store');
const { v4: uuidv4 } = require('uuid');

// add new store to db
router.post('/addStore', (req, res) => {
  // create store unique id
  const storeId = uuidv4();

  // save store to DB
  addStore({ id: storeId, ...req.body })
    .then((doc) => res.status(200).json({ store: doc }))
    .catch((err) => res.status(400).json({ error: err._message }));
});

// get all stores from db
//
router.get('/stores', (_, res) => {
  getStores()
    .then((stores) => {
      res.status(200).json({ stores });
    })
    .catch((err) => res.status(400).json({ err }));
});

module.exports = router;
