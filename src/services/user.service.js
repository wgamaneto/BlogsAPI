const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;
const jwtConfig = { algorithm: 'HS256', expiresIn: '7d' };

const getLogin = async (email, password) => {
  const logedIn = await User.findOne({
    where: { email, password },
  });
  if (logedIn) {
    const token = jwt.sign({ data: { email } }, secret, jwtConfig);
    return token;
  }
  return logedIn;
};

module.exports = {
  getLogin,
};