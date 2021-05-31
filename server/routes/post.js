const express = require('express');
const router = express.Router();

const {
  createPost,
  getPosts,
  getPostsById,
  deletePostById,
} = require('../controllers/post');

router.post('/posts', createPost);
router.get('/posts/:id', getPostsById);
router.get('/posts', getPosts);
router.delete('/posts/:id', deletePostById);

module.exports = router;
