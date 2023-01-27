const express = require('express');
const category = require('../controllers/category.controller');
const { validateCategory } = require('../validations/category.validation');
const { validateToken } = require('../validations/token.validation');

const router = express.Router();

router.get('/', validateToken, category.getAllCategories);
router.post('/', validateToken, validateCategory, category.createCategory);

module.exports = router;