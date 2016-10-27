var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root: 'public'};
});

router.get('/animals', function(req, res, next){

	alert("So you think you're special?");

});

module.exports = router;
