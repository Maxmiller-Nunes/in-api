const yup = require('yup');
const {
  insertProduct,
  removeProduct,
  updateProduct,
  showProduct,
  findByProductId,
  findByProductName,
} = require('../repositories/productRepository');

const create = async (req, res) => {
  const { name, color, value } = req.body;

  const productAlreadyExistWithName = await findByProductName(name);

  if (productAlreadyExistWithName) {
    res.status(400).json({ msg: 'Product with name already exist' });
  }

  const errorMessage = 'Missing invalid required data to create new product';

  const schema = yup.object().shape({
    name: yup.string().required(errorMessage),
    value: yup.number().required(errorMessage),
    color: yup.string().required(errorMessage),
  });

  try {
    await schema.validate(req.body);
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }

  const product = await insertProduct({ name, value, color });

  return res.status(201).json(product);
};

// eslint-disable-next-line consistent-return
const update = async (req, res) => {
  const { name, value, color } = req.body;
  const { id } = req.params;

  const productAlreadyExist = await findByProductId(id);

  if (!productAlreadyExist) {
    return res.status(400).json({ msg: 'Product does not exist' });
  }

  if (name && name !== productAlreadyExist.name) {
    const productAlreadyExistWithName = await findByProductName(name);

    if (productAlreadyExistWithName) {
      res.status(400).json({ msg: 'Product with name already exist' });
    }
  }

  const errorMessage = 'Missing invalid required data to update a product';

  const schema = yup.object().shape({
    name: yup.string(errorMessage),
    value: yup.number(errorMessage),
    color: yup.string(errorMessage),
  });

  try {
    await schema.validate(req.body);
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }

  const product = await updateProduct({
    id,
    name,
    value,
    color,
  });

  res.status(200).json(product);
};

const remove = async (req, res) => {
  const { id } = req.params;

  await removeProduct(id);

  res.status(200).json({ msg: 'Product removed with success' });
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
