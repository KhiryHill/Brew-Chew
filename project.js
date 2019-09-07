$(document).ready(function () {
    //Create a function to hide the age validation if the yes button is pressed
    $("#yesBtn").on("click", function(){
        $(".page1").hide();
        $(".page2").show();
    })
    //Create a function to display an alert if the no button is pressed
    $("#noBtn").on("click", function(){
        $(".page1").hide();
        $(".page0").show();
    })

    //Create a function to display happy hour bars if the "Fill My Cup" button is pressed
    $("#button").on("click", function(){
       
    })  
   
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
 });

 
