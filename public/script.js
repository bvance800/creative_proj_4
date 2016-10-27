$(document).ready(function(){

        $( "#animal-form" ).submit(function(e) {
        
	var url = "getanimal?q=" + $("#animal").val();
	console.log("in the .submit()");
	e.preventDefault();

	$.getJSON(url, function(data){
		
	console.log(data);	

	if(data.length !== 0)
	{
		var keyword = $("#animal").val();
        	console.log(keyword);

        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        	{
        	    	tags: keyword,
            		tagmode: "any",
           	 	format: "json"
        	},
       	 function(data) {
		var rnd = Math.floor(Math.random() * data.items.length);
            	var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");

           	 $('body').css('background-image', "url('" + image_src + "')");
           	 $('body').css('background-repeat', "no-repeat");
           	 $('body').css('background-position', "center center");
           	 $('body').css('background-attachment', "fixed");
           	 $('body').css('background-size', "cover");

        	});
	}

});
    });

    });
