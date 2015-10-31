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
    if(e.which == 13) {
        getMovieInfo();
    }
});


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
				if(jsondata  == null){
//					$("#trailer").attr("src", "");
					$("#trailer").attr("src", "http://i.imgur.com/W7mqS78.gif");



				}else{
					outputTrailer(jsondata);
				}
			}
		});
		
	});
});

function getMovieInfo() {
	
	
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
			if(jsondata  == null){
//				$("#trailer").attr("src", "");
//				$("#trailer").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/PM5544_with_non-PAL_signals.png/250px-PM5544_with_non-PAL_signals.png");
//				$("#trailer").attr("src", "http://www.platosclosetcolorado.com/images/not-found.gif");
				$("#trailer").attr("src", "http://i.imgur.com/W7mqS78.gif");




			}else{
				outputTrailer(jsondata);
			}
		}
	});
	
};

