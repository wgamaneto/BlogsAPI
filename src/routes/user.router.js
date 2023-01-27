const express = require('express');
const user = require('../controllers/user.controller');
const { validateUser } = require('../validations/user.validation');

const router = express.Router();

router.post('/', validateUser, user.createUser);

module.exports = router;