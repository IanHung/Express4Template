var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html', { title: 'Ian is testing the world' });
});

module.exports = router;
