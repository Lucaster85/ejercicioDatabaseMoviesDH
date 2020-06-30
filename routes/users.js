var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController.js')

/* GET users listing. */

router.get('/', usersController.user);

router.get('/login', usersController.login);

router.get('/register', usersController.register);
router.post('/register', usersController.create);

module.exports = router;
