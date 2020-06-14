const express = require('express');
const router = express.Router();

const actorsController = require('../controllers/actorsController');

router.get('/', actorsController.list);

router.get('/search', actorsController.search);

router.get('/bio/:id', actorsController.bio);

router.get('/create', actorsController.create);
router.post('/create', actorsController.load);

router.get('/edit/:id', actorsController.edit);
router.put('/edit/:id', actorsController.update);

router.delete('/delete/:id', actorsController.delete);

module.exports = router;
