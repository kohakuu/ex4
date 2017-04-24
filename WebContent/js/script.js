$(document).ready(function(){
	var click1 = function() {
		var data = $("#col").html();
		var newContent = "<h1>Welcome</h1>" +
				"<p>Content</p>";

		$("#col").html(newContent);

	};
	var click2 = function() {
		var newContent = "<h1>Page links</h1>" +
				"<p>Smth</p>";

		$("#left").slideToggle(300,function(){$("#col").css("width","75%")});
	};
	var click3 = function() {
		var newContent = "<h1>Page refs</h1>" +
				"<p>Smth</p>";

		$("#col").html(newContent);
		$
	};
	
	$("li:nth-child(1)").click(click1);
	$("li:nth-child(2)").click(click2);
	$("li:nth-child(3)").click(click3);
});