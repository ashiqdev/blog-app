const Comment = require('../models/Comment');

const createComment = async (req, res) => {
  try {
    const { email, text, postId } = req.body;
    const comment = new Comment({
      post: postId,
      email: email,
      text: text,
    }).save();

    res.status(201).json(comment);
  } catch (error) {
    console.log(error);
  }
};

const getComments = async (req, res) => {
  const comments = await Comment.find({ post: req.body.postId });

  res.status(200).json(comments);
};

module.exports = { createComment, getComments };
