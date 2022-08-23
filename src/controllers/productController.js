const {
  insertProduct,
  removeProduct,
  updateProduct,
  showProduct,
} = require('../repositories/productRepository');

const create = async (req, res) => {
  const data = req.body;

  const product = await insertProduct(data);

  return res.status(201).json(product);
};

const update = async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  const product = await updateProduct({ id, data });

  res.status(200).json(product);
};

const remove = async (req, res) => {
  const { id } = req.params;

  await removeProduct(id);

  res.status(200).send();
};

const show = async (req, res) => {
  const products = await showProduct();

  return res.status(200).json(products);
};

module.exports = {
  create,
  update,
  remove,
  show,
};
