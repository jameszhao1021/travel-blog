const express = require('express');
const router = express.Router();
const galleriesController = require('../../controllers/api/galleries');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', galleriesController.index);
router.post('/', ensureLoggedIn, galleriesController.create);
// router.delete('/:id', ensureLoggedIn, galleriesController.delete);
// router.put('/:id', ensureLoggedIn, galleriesController.update);

// GET /api/blogs/:id
// router.get('/:id', galleriesController.show);


module.exports = router;