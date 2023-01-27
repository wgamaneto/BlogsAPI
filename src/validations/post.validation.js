const Joi = require('joi');

const categoryValidation = Joi.number().integer().required();

const updateValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

const postValidation = updateValidation.keys({
  categoryIds: Joi.array().items(categoryValidation).min(1).required(),
});

const validatePost = (req, res, next) => {
  const user = req.body;
  const { error } = postValidation.validate(user);
  if (error) {
    return res.status(400)
      .json({ message: 'Some required fields are missing' });
  }

  return next();
};

const validateUpdate = (req, res, next) => {
  const user = req.body;
  const { error } = updateValidation.validate(user);
  if (error) {
    return res.status(400)
      .json({ message: 'Some required fields are missing' });
  }

  return next();
};

module.exports = {
  validatePost,
  validateUpdate,
};