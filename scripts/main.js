$(document).ready(function(){
    var dom = 'rikiji';
    $("a.mail").attr("href","mailto:"+dom+"@"+dom+".it");

    var prefix = "http://gatherer.wizards.com/Handlers/Image.ashx?size=small&type=card&name=";
    $('a').each(function(){
	var link = $(this).attr("href");
	if (link.lastIndexOf("card:", 0) === 0) {
	    var card = encodeURIComponent(link.slice(5));
	    $(this).attr("href","http://magiccards.info/query?q="+card);
	    $(this).attr("target","_blank");
	    $(this).hover(function(){
		var img = $("<img>").attr("src", prefix+card).addClass("autocard");
		$(this).append(img);
		$(this).data("autocard", img);
	    }, function(){
		$(this).data("autocard").remove()
	    })
	}
    });
});
