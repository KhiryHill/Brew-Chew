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
         name = response[i].name;
         console.log(name);
        }
    });

    var barList = $("<th>").text(name);

    $(".table").append(barList);
    

    //Create a function to hide the start button when it is clicked
    $("#yesButton").on("click", function () {
        $("#content-row").hide();
        $(".questions").show();
<<<<<<< HEAD
    });

    
});
=======
    })
    var zipCodeBox = $("#zip-code");
    var errorDiv = container.find("div.text-error");
    //Response Handler
    function theResponse(data){
    }


    var name = "";
   var barURL = "https://api.openbrewerydb.org/breweries?by_state=north_carolina";
   $.ajax({
       url: barURL,
       method: "GET"
   }).then(function (response) {
       console.log(response);
       console.log("Length of response: " + response.length)
       for (var i = 0; i < response.length; i++) {
        name = response[i].name;
        console.log(name);
       }
   });

    var clientKey = "js-9qZHzu2Flc59Eq5rx10JdKERovBlJp3TQ3ApyC4TOa3tA8U7aVRnFwf41RpLgtE7";
		
		var cache = {};
		var container = $("#example1");
		var errorDiv = container.find("div.text-error");
		
		/** Handle successful response */
		function handleResp(data)
		{
			// Check for error
			if (data.error_msg)
				errorDiv.text(data.error_msg);
			else if ("city" in data)
			{
				// Set city and state
				container.find("input[name='city']").val(data.city);
				container.find("input[name='state']").val(data.state);
			}
		}
		
		// Set up event handlers
		container.find("input[name='zipcode']").on("keyup change", function() {
			// Get zip code
			var zipcode = $(this).val().substring(0, 5);
			if (zipcode.length == 5 && /^[0-9]+$/.test(zipcode))
			{
				// Clear error
				errorDiv.empty();
				
				// Check cache
				if (zipcode in cache)
				{
					handleResp(cache[zipcode]);
				}
				else
				{
					// Build url
					var url = "https://www.zipcodeapi.com/rest/"+clientKey+"/info.json/" + zipcode + "/radians";
					
					// Make AJAX request
					$.ajax({
						"url": url,
						"dataType": "json"
					}).done(function(data) {
						handleResp(data);
						
						// Store in cache
						cache[zipcode] = data;
					}).fail(function(data) {
						if (data.responseText && (json = $.parseJSON(data.responseText)))
						{
							// Store in cache
							cache[zipcode] = json;
							
							// Check for error
							if (json.error_msg)
								errorDiv.text(json.error_msg);
						}
						else
							errorDiv.text('Request failed.');
					});
				}
			}
		}).trigger("change");
	
 });
 
 
>>>>>>> 1fdc9fd177ccdc11a3c04e15088064a1b92b3261
