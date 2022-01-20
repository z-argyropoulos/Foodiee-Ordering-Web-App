const router = require('express').Router();
const {
  addStore,
  getStores,
  getStoreDetails,
} = require('../../db/actions/store');

// add new store to db
router.post('/create', (req, res) => {
  // save store to DB
  addStore(req.body)
    .then((doc) => res.status(200).json({ store: doc }))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// get all stores from db
router.get('/', (_, res) => {
  getStores()
    .then((stores) => {
      res.status(200).json({ stores });
    })
    .catch((err) => res.status(400).json({ error: err.message }));
});

// get specific store
router.get('/byId', (req, res) => {
  const { storeId } = req.query;
  getStoreDetails(storeId)
    .then((store) => {
      res.status(200).json({ store });
    })
    .catch((err) => res.status(400).json({ error: err.message }));
});

module.exports = router;
