/* eslint-disable linebreak-style */
const productRouter = require('express').Router();

const {
  create,
  remove,
  show,
  update,
} = require('../controllers/productController');

productRouter.post('/products', create);
productRouter.put('/products/:id', update);
productRouter.delete('/products/:id', remove);
productRouter.get('/products', show);

module.exports = productRouter;
