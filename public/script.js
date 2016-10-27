$(document).ready(function(){

        $( "#animal-form" ).submit(function(e) {
        var keyword = $("#animal").val();
        console.log(keyword);
        e.preventDefault();

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
    });

    });
