const express = require('express');
const router = express.Router();
const blogsController = require('../../controllers/api/blogs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, blogsController.index);
router.post('/', ensureLoggedIn, blogsController.create);
// router.delete('/:id', ensureLoggedIn, blogsController.delete);
// router.put('/:id', ensureLoggedIn, blogsController.update);

// GET /api/blogs/:id
router.get('/:id', ensureLoggedIn, blogsController.show);


module.exports = router;