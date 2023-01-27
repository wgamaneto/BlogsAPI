const express = require('express');
const blogPost = require('../controllers/blogPost.controller');
const { validatePost, validateUpdate } = require('../validations/post.validation');
const { validateToken } = require('../validations/token.validation');

const router = express.Router();

router.get('/search', validateToken, blogPost.getPostByQuery);
router.get('/', validateToken, blogPost.getAllPosts);
router.get('/:id', validateToken, blogPost.getPostById);
router.post('/', validateToken, validatePost, blogPost.createPost);
router.put('/:id', validateToken, validateUpdate, blogPost.updatePost);
router.delete('/:id', validateToken, blogPost.deletePost);

module.exports = router;