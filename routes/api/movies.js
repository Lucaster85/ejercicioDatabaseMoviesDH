const express = require('express');
const router = express.Router();
const moviesAPIController = require('../../controllers/api/moviesController')

router.get('/', moviesAPIController.list);

router.get('/:id', moviesAPIController.find);

router.post('/', moviesAPIController.create)

module.exports = router;