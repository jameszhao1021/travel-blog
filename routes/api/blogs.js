const express = require('express');
const router = express.Router();
const blogsController = require('../../controllers/api/blogs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/blogs/:id

router.get('/selected/:continent', blogsController.publicIndex);
router.get('/:view', ensureLoggedIn, blogsController.index);
router.delete('/:id', ensureLoggedIn, blogsController.delete);
router.get('/detail/:id', blogsController.show);
router.post('/', ensureLoggedIn, blogsController.create);
router.put('/:id', ensureLoggedIn, blogsController.update);






module.exports = router;