function outputToDocument(jsondata) {
	$("#titelName").empty();
	$("#actors").empty();
	$("#plotText").empty();
	$("#titelName").append(jsondata["Title"]);
	$("#actors").append(jsondata["Actors"]);
	$("#plotText").append(jsondata["Plot"]);	
}

function outputTrailer(jsondata) {
	$("#trailer").attr("src", jsondata["trailerLink"]);
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
		var urlTrailer = "http://localhost:8080/moviez/api/watchtrailer/" + $('#myText').val();

		$.ajax({
			type : "GET",
			url : url,
			datatype : "json",
			success : function(jsondata) {
				outputToDocument(jsondata);
			}
		});
		
		$.ajax({
			type : "GET",
			url : urlTrailer,
			datatype : "json",
			success : function(jsondata) {
				outputTrailer(jsondata);
			}
		});
		
	});
});
