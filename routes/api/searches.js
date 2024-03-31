const express = require('express');
const router = express.Router();
const searchController = require('../../controllers/api/searches');

//GET /api/search?
router.get('/', searchController.blogSearch);

module.exports = router;
