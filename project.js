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
    });

    
});