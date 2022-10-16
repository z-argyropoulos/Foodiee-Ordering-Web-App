const { addItem } = require('../../db/actions/item');

const itemsController = {
  create: (req, res) => {
    addItem(req.body)
      .then((item) => res.status(200).json({ item }))
      .catch((err) => res.status(400).json({ error: err.message }));
  },
};

module.exports = itemsController;
