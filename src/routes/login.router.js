const express = require('express');
const { validateLogin } = require('../validations/login.validation');
const login = require('../controllers/user.controller');

const router = express.Router();

router.post('/', validateLogin, login.getLogin);

module.exports = router;