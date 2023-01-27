const userService = require('../services/user.service');

const getLogin = async (req, res) => {
  const { email, password } = req.body;
  const result = await userService.getLogin(email, password);
  if (!result) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  res.status(200).json({ token: result });
};
const createUser = async (req, res) => {
  const user = req.body;
  const result = await userService.createUser(user);
  if (result) {
    return res.status(201).json({ token: result });
  }
  res.status(409).json({ message: 'User already registered' });
};

module.exports = {
  getLogin, createUser,
};