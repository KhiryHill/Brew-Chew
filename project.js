$(document).ready(function () {


var name = "";

    var barURL = "https://api.openbrewerydb.org/breweries?by_state=north_carolina";

    $.ajax({
        url: barURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log("Length of response: " + response.length)
        for (var i = 0; i < response.length; i++) {
		fullInfo=response[i];
		 name = response[i].name;
		 state=response[i].state;
		 city=response[i].city;
		 street= response[i].street;
		 postal= response[i].postal_code;
		 website=response[i].website_url;

		 location= street,state,city,postal

		console.log(fullInfo);
		 console.log(name);
		 console.log(location);
		 console.log(website);
		 
        }
    });

    

	$(".table").append(name + "<br>" + response);
	
    

    //Create a function to hide the start button when it is clicked
    $("#yesButton").on("click", function () {
        $("#content-row").hide();
        $(".questions").show();
    });

    
});
