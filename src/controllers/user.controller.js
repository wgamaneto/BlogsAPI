const userLogin = require('../services/user.service');

const getLogin = async (req, res) => {
  const { email, password } = req.body;
  const result = await userLogin.getLogin(email, password);
  if (!result) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  res.status(200).json({ token: result });
};

module.exports = {
  getLogin,
};