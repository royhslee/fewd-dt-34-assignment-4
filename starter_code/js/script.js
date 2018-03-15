$("a").click(function (event) {
	event.preventDefault()
});

$(document).ready(function () {
	console.log("js ready");
});


$(".readmore").click(function(){
	$("#show-this-on-click").slideDown("slow");
	$(".readless").show();
	$(".readmore").hide();
});

$(".readless").click(function(){
	$("#show-this-on-click, .readless").hide("fast");
	$(".readmore").show();
});

$(".learnmore").click(function(){	
	$("#learnmoretext").slideDown(500);
	$(".learnmore").hide(1);
})