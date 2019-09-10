$(document).ready(function () {


var name = "";
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

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/28213",
        "method": "GET",
        "headers": {
          "X-RapidAPI-Host": "us-restaurant-menus.p.rapidapi.com",
          "X-RapidAPI-Key": "a2a146e526msh7075b7250515c75p13d74bjsn4414590d1dc6"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        for (var i= 0; i <response.result.data.length; i++){
            address = response.result.data[i].address.formatted;
            ResName = response.result.data[i].restaurant_name;
            PhoneNumber = response.result.data[i].restaurant_phone;
            Cuisines = response.result.data[i].cuisines;
            
            console.log(ResName);
            console.log(PhoneNumber);
            console.log(address);
            console.log(Cuisines)
        }

      });



      var menuitems = {
        "async": true,
        "crossDomain": true,
        "url": "https://us-restaurant-menus.p.rapidapi.com/restaurant/47773/menuitems?page=3",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
            "x-rapidapi-key": "a2a146e526msh7075b7250515c75p13d74bjsn4414590d1dc6"
        }
    }
    
    $.ajax(menuitems).done(function (response) {
        console.log(response);

        for ( var i=0; i <response.result.data.length; i++){
            menuitemname = response.result.data[i].menu_item_name;
            menuitem = response.result.data[i].menu_item_pricing;

            console.log(menuitemname);
            console.log(menuitem);
        }
    });

});

