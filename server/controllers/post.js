const Post = require('../models/Post');
const Comment = require('../models/Comment');

const createPost = async (req, res) => {
  try {
    const post = await new Post({
      ...req.body.product,
    }).save();

    res.status(201).json(post);
  } catch (err) {
    console.log(err);
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};

const getPostsById = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
};

const deletePostById = async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({ _id: req.params.id });
    const comments = await Comment.find({ post: post.id });
    if (comments.length > 0) {
      await Comment.deleteMany({ post: req.params.id });
    }
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostsById,
  deletePostById,
};
