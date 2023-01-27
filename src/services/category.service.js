const { Category } = require('../models');

const getAllCategories = async () => Category.findAll();

const createCategory = async (category) => {
  // const exists = await getCategoryByName(category.name);
  // if (exists) {
  //   return null;
  // }
  const result = await Category.create(category);

  return result;
};

module.exports = {
  getAllCategories,
  createCategory,
};