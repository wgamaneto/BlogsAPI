const express = require('express');
const login = require('../controllers/user.controller');
const validateLogin = require('../validations/login.validation');

const router = express.Router();
router.post('/', validateLogin.validateLogin, login.getLogin);

module.exports = router;
