const express = require('express');
const router = express.Router();

const { createComment, getComments } = require('../controllers/comment');

router.post('/comments', createComment);
router.get('/comments', getComments);

module.exports = router;
