function outputToDocument(jsondata) {
	$("#titelName").empty();
	$("#actors").empty();
	$("#plotText").empty();
	$("#titelName").append("Titel: ");
	$("#actors").append("Medverkande: ");
	$("#plotText").append("Handling: ");
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

$(document).keypress(function(e) {
	if (e.which == 13) {
		getMovieInfo();
	}
});

///**
// * Function that shows information about the API.
// */
//$(function getAPI() {
//
//	$("#getAPI").click(
//			function() {
//
//				alert("1. \t/api/collection/{movietitle} "
//						+ "\n- Enter a movie title to get info about a movie \n"
//						+ "\n2. \t/api/version/check "
//						+ "\n- To check API version \n"
//						+ "\n3. \t/api/watchtrailer/{movietitle} "
//						+ "\n- Fetch trailer for movie");
//			});
//});

/**
 * Function that shows information about the API.
 */
$(function getAPI() {

	$("#getAPI").click(
			function() {

				window.location.assign("http://localhost:8080/MoviezClient/api.html");
			});
});

/**
* Function redirects to the home page
*/
$(function getHome() {

	$("#goBack").click(
			function() {

				window.location.assign("http://localhost:8080/MoviezClient/index.html");
			});
});


/**
 * Function takes the user input and fetches the resource for chosen movie from
 * omdb api
 */
$(function() {

	$("#getMovieData")
			.click(
					function() {

						var url = "http://localhost:8080/moviez/api/collection/"
								+ $('#myText').val();
						var urlTrailer = "http://localhost:8080/moviez/api/watchtrailer/"
								+ $('#myText').val();

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
								if (jsondata == null) {
									$("#trailer").attr("src",
											"http://i.imgur.com/W7mqS78.gif");

								} else {
									outputTrailer(jsondata);
								}
							}
						});

					});
});

function getMovieInfo() {

	var url = "http://localhost:8080/moviez/api/collection/"
			+ $('#myText').val();
	var urlTrailer = "http://localhost:8080/moviez/api/watchtrailer/"
			+ $('#myText').val();

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
			if (jsondata == null) {
				$("#trailer").attr("src", "http://i.imgur.com/W7mqS78.gif");

			} else {
				outputTrailer(jsondata);
			}
		}
	});
};