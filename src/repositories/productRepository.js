/* eslint-disable comma-dangle */
const { Product } = require('../schema/productSchema');

const insertProduct = async (data) => {
  const product = await Product.create(data);

  return product;
};

const removeProduct = async (id) => {
  await Product.deleteOne({ _id: id });
};

// eslint-disable-next-line object-curly-newline
const updateProduct = async ({ id, name, value, color }) => {
  const product = await Product.findOneAndUpdate(
    { _id: id },
    {
      name,
      value,
      color,
    },
    { new: true }
  );

  return product;
};

const showProduct = async () => {
  const products = await Product.find();

  return products;
};

const findByProductId = async (id) => {
  const product = await Product.findById(id);

  return product;
};

const findByProductName = async (name) => {
  const product = await Product.findOne({ name });

  return product;
};

module.exports = {
  insertProduct,
  removeProduct,
  updateProduct,
  showProduct,
  findByProductId,
  findByProductName,
};
