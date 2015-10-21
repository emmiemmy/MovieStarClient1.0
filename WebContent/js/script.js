function outputToDocument(jsondata) {
	$("#plotText").empty();
	$("#plotText").append("Titel:" + jsondata["Title"] + "\n" + "Handling:" +  jsondata["Plot"]);
}

function myFunction() {
	var x = document.getElementById("myText").value;

	document.getElementById("demo").innerHTML = x;
}

/**
 * Function takes the user input and fetches the resource for chosen movie from omdb api
 */
$(function() {

	$("#getMovieData").click(function() {
				
		var url = "http://localhost:8080/moviez/api/collection/" + $('#myText').val();

		$.ajax({
			type : "GET",
			url : url,
			datatype : "json",
			success : function(jsondata) {
				outputToDocument(jsondata);
			}
		});
	});
});
