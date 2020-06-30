var express = require('express');
var router = express.Router();
var gifResourse = require('../request/gifResuorse');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sitio Movies DB' });
  
  gifResourse.random().then((resultados) => {
    console.log(resultados);
    
  })

});

module.exports = router;
