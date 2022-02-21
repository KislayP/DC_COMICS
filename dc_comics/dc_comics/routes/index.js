var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET comic 1 page. */
router.get('/comic1', function(req, res, next) {
  res.render('comic1');
});

/* GET comic 2 page. */
router.get('/comic2', function(req, res, next) {
  res.render('comic2');
});

/* GET comic 3 page. */
router.get('/comic3', function(req, res, next) {
  res.render('comic3');
});

/* GET comic 4 page. */
router.get('/comic4', function(req, res, next) {
  res.render('comic4');
});

/* GET comic 5 page. */
router.get('/comic5', function(req, res, next) {
  res.render('comic5');
});




module.exports = router;
