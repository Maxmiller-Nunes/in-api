/* eslint-disable comma-dangle */
const { Product } = require('../schema/productSchema');

const insertProduct = async (data) => {
  const product = await Product.create(data);

  return product;
};

const removeProduct = async (id) => {
  await Product.deleteOne({ _id: id });
};

const updateProduct = async ({ id, data }) => {
  const product = await Product.findOneAndUpdate(
    { _id: id },
    {
      name: data.name,
      value: data.value,
      color: data.color,
    },
    { new: true }
  );

  return product;
};

const showProduct = async () => {
  const products = await Product.find();

  return products;
};

module.exports = {
  insertProduct,
  removeProduct,
  updateProduct,
  showProduct,
};
