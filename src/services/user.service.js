const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;
const jwtConfig = { algorithm: 'HS256', expiresIn: '7d' };

const getToken = (result) => {
  const { password: _, ...payload } = result.dataValues;
  const token = jwt.sign({ payload }, secret, jwtConfig);
  return token;
};

const getLogin = async (email, password) => {
  const logedIn = await User.findOne({
    where: { email, password },
  });
  if (logedIn) {
    return getToken(logedIn);
  }
  return logedIn;
};
const getUserByEmail = async (email) => {
  const result = await User.findOne({
    where: { email },
  });
  return result;
};

const createUser = async (user) => {
  const exists = await getUserByEmail(user.email);
  if (exists) {
    return null;
  }
  const result = await User.create(user);

  return getToken(result);
};

module.exports = {
  getLogin, createUser,
};