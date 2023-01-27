const { BlogPost } = require('../../models');

const validatePost = async (id, userId) => {
  const result = await BlogPost.findOne({ where: { id } });
  if (!result) {
    return { type: 404, message: 'Post does not exist' };
  }
  if (result.userId !== userId) {
    return { type: 401, message: 'Unauthorized user' };
  }
  return null;
};

module.exports = {
  validatePost,
};