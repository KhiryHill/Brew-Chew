$(document).ready(function () {


	var barURL = "https://api.openbrewerydb.org/breweries?by_state=north_carolina";

	$.ajax({
		url: barURL,
		method: "GET",
	}).then(function (response) {
		console.log(response);
		for (var i = 0; i < response.length; i++) {
			name = response[i].name;
			street = response[i].street;
			phone = response[i].phone;
			website = response[i].website_url;
			$('#bar-name').append(name + "<br>");
			$("#location").append(street + "<br>");
			$("#phone").append(phone + "<br>");
			$("#url").append(website + "<br>");
		}
	});
	//Create a function to hide the start button when it is clicked
	$("#yesButton").on("click", function () {
		$("#content-row").hide();
		$(".questions").show();
	});
 });




