const express = require('express');
const router = express.Router();
const commentsController = require('../../controllers/api/comments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//POST /api/blogs/:id/comments
router.post('/api/blogs/:id/comments', ensureLoggedIn, commentsController.addComment);



module.exports = router;