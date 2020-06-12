const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.list);


router.get('/new', moviesController.new);

router.get('/recomended', moviesController.recomend);

router.get('/search', moviesController.search);

router.get('/detail/:id', moviesController.detail);

router.get('/create', moviesController.create);
router.post('/create', moviesController.load);

router.get('/edit/:id', moviesController.edit);
router.put('/edit/:id', moviesController.update);

router.delete('/delete/:id', moviesController.delete);

module.exports = router;

