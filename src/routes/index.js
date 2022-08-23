const router = require('express').Router();

const {
  create,
  update,
  remove,
  show,
} = require('../controllers/productController');

router.post('/products', create);
router.put('/products/:id', update);
router.delete('/products/:id', remove);
router.get('/products', show);

module.exports = router;
