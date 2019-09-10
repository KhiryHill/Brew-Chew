$(document).ready(function () {


var name = "";
var location = {};
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

    var resturantsApi ="https://developers.zomato.com/api/v2.1/search?entity_id=303&entity_type=city&q=Resturants&lat=35.3097604&lon=-80.7493377"

    $.ajax({
        url:resturantsApi,
        method:"GET",
    }).then(function(eatApi){
        console.log(eatApi);
    

        for( var i=0; i < eatApi.length; i++){

            var 
            name= eatApi[i].name;
            console.log(name);
        }


    })




});

