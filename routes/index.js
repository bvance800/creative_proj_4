var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root: 'public'});
});

router.get('/animals', function(req, res, next){

	alert("So you think you're special?");

});

router.get('/getanimal', function(req, res, next){

	var fs = require('fs');

	fs.readFile(__dirname + '/animals.txt',function(err,data) 
		{ 
			if(err)
			{
				console.log("Oh my error...");
				 throw err;
			}
			
			var search = req.query.q;

			var jsonresult = [];

			var animals = data.toString().split("\n"); 
			for(var i = 0; i < animals.length; i++) 
			{	var result = animals[i];
				if(result === search)
				{ 
					jsonresult.push({type:animals[i]});	 
				}
			} 

			console.log(jsonresult);
			res.status(200).json(jsonresult);
		}); 

});


module.exports = router;
