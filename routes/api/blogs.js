const express = require('express');
const router = express.Router();
const blogsController = require('../../controllers/api/blogs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/blogs/:id

router.delete('/:id', ensureLoggedIn, blogsController.delete);
router.get('/:continent', blogsController.publicIndex);
router.get('/detail/:id', blogsController.show);
router.get('/', ensureLoggedIn, blogsController.index);
router.post('/', ensureLoggedIn, blogsController.create);
router.put('/:id', ensureLoggedIn, blogsController.update);






module.exports = router;