const express = require('express');
const router = express.Router();
const profilesController = require('../../controllers/api/profiles');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.put('/:id', ensureLoggedIn, profilesController.update);
router.get('/', ensureLoggedIn, profilesController.index);



module.exports = router;