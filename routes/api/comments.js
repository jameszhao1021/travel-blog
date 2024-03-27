const express = require('express');
const router = express.Router();
const commentsController = require('../../controllers/api/comments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//POST /api/blogs/:id/comments
router.post('/api/blogs/:id/comments', ensureLoggedIn, commentsController.addComment);
// DELETE /api/comments/:id
router.delete('/api/comments/:id', ensureLoggedIn, commentsController.delete);
// PUT /api/comments/:id
router.put('/api/comments/:id', ensureLoggedIn, commentsController.update);



module.exports = router;