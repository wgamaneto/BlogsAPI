const categoryService = require('../services/category.service');

const getAllCategories = async (_req, res) => {
  const allCategories = await categoryService.getAllCategories();

  res.status(200).json(allCategories);
};

const createCategory = async (req, res) => {
  const category = req.body;
  const result = await categoryService.createCategory(category);
  if (result) {
    return res.status(201).json(result);
  }
  res.status(409).json({ message: 'Category already registered' });
};

module.exports = {
  getAllCategories,
  createCategory,
};