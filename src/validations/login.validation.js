const Joi = require('joi');

const loginValidation = Joi.object().keys({
  email: Joi.string().min(1).required(),
  password: Joi.string().min(1).required(),
});

const validateLogin = (req, res, next) => {
  const login = req.body;
  const { error } = loginValidation.validate(login);
  if (error) {
    const [detail] = error.details;
    if (detail.type === 'string.empty' || detail.type === 'any.required') {
      return res.status(400)
        .json({ message: 'Some required fields are missing' });
    }
  }

  return next();
};

module.exports = {
  validateLogin,
};