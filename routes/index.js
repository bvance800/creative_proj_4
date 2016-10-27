var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root: 'public'});
});

router.get('/hello', function(req, res, next)
{
	console.log("inside '/hello'");
});

router.get('/get', function(req, res, next){
	console.log("/getanimal");
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
