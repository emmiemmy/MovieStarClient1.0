function print(text) {

	$("#out").append(text);
}

function myFunction() {
	var x = document.getElementById("myText").value;

	document.getElementById("demo").innerHTML = x;
}

$(function() {

	$("#getdata").click(function() {

		$.ajax({
			type : "GET",
			url : "http://localhost:8080/moviez/api/collection/Scream",
			datatype : "text",
			success : function(text) {
				print(text);
			}
		});
	});
});